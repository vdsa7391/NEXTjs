export function formatDate(date: string): string {
   let parsedDate: Date;

   if (date.toLowerCase() === "today") {
       parsedDate = new Date(); // Current date
   } else if (date.toLowerCase() === "yesterday") {
       parsedDate = new Date();
       parsedDate.setDate(parsedDate.getDate() - 1); // Subtract one day
   } else {
       // Try to parse the date directly
       parsedDate = new Date(date);
   }

   // Check if the parsedDate is valid
   if (isNaN(parsedDate.getTime())) {
       throw new Error(`Invalid date format: ${date}`);
   }

   // Format the date
   return parsedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
