function netSalaryCalculator(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let tax = grossSalary * 0.3; // Approximate PAYE tax
    let nhif = grossSalary * 0.025; // NHIF deductions
    let nssf = grossSalary * 0.06; // NSSF deductions
    let netSalary = grossSalary - (tax + nhif + nssf);
    return { grossSalary, tax, nhif, nssf, netSalary };
}
