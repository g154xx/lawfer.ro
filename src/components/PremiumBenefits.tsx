
const PremiumBenefits = () => {
  const benefits = [
    "Consultații juridice IA nelimitate",
    "Analiză și revizuire documente",
    "Acces prioritar la avocați",
    "Șabloane de formulare juridice"
  ];

  return (
    <div className="mt-8 p-4 bg-secondary/30 rounded-lg">
      <h4 className="font-semibold mb-2 text-center">Beneficii premium</h4>
      <ul className="space-y-1 text-sm">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PremiumBenefits;
