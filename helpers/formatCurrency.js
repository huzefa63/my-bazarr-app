export default function formatCurrency(amount){
    const formatted = new Intl.NumberFormat('en-In',{style:'currency',currency:'INR'}).format(amount);
    return formatted;
}