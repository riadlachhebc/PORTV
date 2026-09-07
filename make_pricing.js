const fs = require('fs');
const html = fs.readFileSync('pricing_html.txt', 'utf8');
const header = 'use client';\nimport React, { useState } from 'react';\nimport { getWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';\n\nexport default function Pricing() {\n  const [devices, setDevices] = useState(1);\n\n  const getPrice = (months) => {\n    const basePrices = {\n      3: 29.99,\n      6: 44.99,\n      12: 59.99\n    };\n    const total = basePrices[months] * devices;\n    const monthly = (total / months).toFixed(2).replace('.', ',');\n    const [whole, decimal] = total.toFixed(2).split('.');\n    return { whole, decimal, monthly, total: total.toFixed(2).replace('.', ',') };\n  };\n\n  const p3 = getPrice(3);\n  const p6 = getPrice(6);\n  const p12 = getPrice(12);\n\n  return (\n;
const footer = \n  );\n}\n;
fs.writeFileSync('src/components/Pricing.tsx', header + html + footer);

let page = fs.readFileSync('src/app/page.tsx', 'utf8');
page = page.replace(html, '<Pricing />');
page = page.replace("'use client';\n", '');
page = page.replace("import React, { useState, useEffect } from 'react';", "import React from 'react';\nimport Pricing from '@/components/Pricing';");
const stateStr = "  const [devices, setDevices] = useState(1);\n\n  const getPrice = (months) => {\n    const basePrices = {\n      3: 29.99,\n      6: 44.99,\n      12: 59.99\n    };\n    const total = basePrices[months] * devices;\n    const monthly = (total / months).toFixed(2).replace('.', ',');\n    const [whole, decimal] = total.toFixed(2).split('.');\n    return { whole, decimal, monthly, total: total.toFixed(2).replace('.', ',') };\n  };\n\n  const p3 = getPrice(3);\n  const p6 = getPrice(6);\n  const p12 = getPrice(12);\n\n";
page = page.replace(stateStr, '');
fs.writeFileSync('src/app/page.tsx', page);
