const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const sIdx = page.indexOf('<section className="w-full py-24 relative" id="planos">');
const subStr = page.substring(sIdx);
const eIdx = subStr.indexOf('</section>') + 10;
const pricingHtml = subStr.substring(0, eIdx);

const componentCode = [
  "'use client';",
  "import React, { useState } from 'react';",
  "import { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';",
  "",
  "export default function Pricing() {",
  "  const [devices, setDevices] = useState(1);",
  "",
  "  const getPrice = (months) => {",
  "    const basePrices = { 3: 29.99, 6: 44.99, 12: 59.99 };",
  "    const total = basePrices[months] * devices;",
  "    const monthly = (total / months).toFixed(2).replace('.', ',');",
  "    const [whole, decimal] = total.toFixed(2).split('.');",
  "    return { whole, decimal, monthly, total: total.toFixed(2).replace('.', ',') };",
  "  };",
  "",
  "  const p3 = getPrice(3);",
  "  const p6 = getPrice(6);",
  "  const p12 = getPrice(12);",
  "",
  "  return (",
  pricingHtml,
  "  );",
  "}"
].join('\n');

fs.writeFileSync('src/components/Pricing.tsx', componentCode);

page = page.replace(pricingHtml, '<Pricing />');
page = page.replace("'use client';\n", "");
page = page.replace("import React, { useState, useEffect } from 'react';", "import React from 'react';\nimport Pricing from '@/components/Pricing';");

const pStart = page.indexOf('  const [devices, setDevices] = useState(1);');
const pEnd = page.indexOf('const p12 = getPrice(12);') + 'const p12 = getPrice(12);'.length;
page = page.substring(0, pStart) + page.substring(pEnd);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Done!');
