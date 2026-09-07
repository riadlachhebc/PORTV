const fs = require('fs');
const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

const startIdx = lines.findIndex(l => l.includes('<section className="w-full py-24 relative" id="planos">'));
const endIdx = lines.findIndex((l, idx) => idx > startIdx && l.includes('</section>'));

const pricingCode = lines.slice(startIdx, endIdx + 1).join('\n');

const componentCode = 'use client';
import React, { useState } from 'react';
import { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';

export default function Pricing() {
  const [devices, setDevices] = useState(1);

  const getPrice = (months) => {
    const basePrices = {
      3: 29.99,
      6: 44.99,
      12: 59.99
    };
    const total = basePrices[months] * devices;
    const monthly = (total / months).toFixed(2).replace('.', ',');
    const [whole, decimal] = total.toFixed(2).split('.');
    return { whole, decimal, monthly, total: total.toFixed(2).replace('.', ',') };
  };

  const p3 = getPrice(3);
  const p6 = getPrice(6);
  const p12 = getPrice(12);

  return (
 + pricingCode + 
  );
}
;
fs.writeFileSync('src/components/Pricing.tsx', componentCode);

// Now update page.tsx
lines.splice(startIdx, endIdx - startIdx + 1, '<Pricing />');
// Remove 'use client' and imports we moved
let newPageContent = lines.join('\n');
newPageContent = newPageContent.replace("'use client';\n", "");
newPageContent = newPageContent.replace("import React, { useState, useEffect } from 'react';", "import React from 'react';\nimport Pricing from '@/components/Pricing';");

// Remove the old getPrice definition from page.tsx (it's between start/end)
const gpStart = newPageContent.indexOf('  const [devices, setDevices] = useState(1);');
if(gpStart !== -1) {
  const p12End = newPageContent.indexOf('const p12 = getPrice(12);') + 'const p12 = getPrice(12);'.length;
  newPageContent = newPageContent.substring(0, gpStart) + newPageContent.substring(p12End);
}

fs.writeFileSync('src/app/page.tsx', newPageContent);
console.log('Successfully extracted Pricing component and updated page.tsx!');
