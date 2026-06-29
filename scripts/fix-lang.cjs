const fs = require('fs');
const pages = ["AgricultureOverview","HealthcareOverview","EducationOverview","ManufacturingOverview","EnterpriseOverview","RetailOverview","TransportOverview","EnergyOverview","MediaOverview","SecurityOverview","LawOverview","ClimateOverview","GovTechOverview"];

function hasCJK(s) { return /[一-鿿]/.test(s); }
function startsEnglish(s) { return /^[A-Za-z]/.test(s.trim()); }
let total = 0;

for (const p of pages) {
  const path = "src/pages/" + p + ".tsx";
  if (!fs.existsSync(path)) continue;
  let content = fs.readFileSync(path, "utf8");
  const original = content;

  // Match L('...','...','...') with simple non-greedy capture
  content = content.replace(/L\('([\s\S]*?)','([\s\S]*?)','([\s\S]*?)'\)/g, (match, a, b, c) => {
    // Only fix if: arg1 has CJK, arg2 has CJK, arg3 starts with English letter
    if (hasCJK(a) && hasCJK(b) && startsEnglish(c)) {
      total++;
      // Rotate: L(en, zh-CN, zh-TW)
      return `L('${c}','${a}','${b}')`;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(path, content);
    console.log('Fixed: ' + p);
  }
}
console.log('Total fixed: ' + total);
