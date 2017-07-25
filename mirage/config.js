export default function() {

  this.passthrough('https://4x1srr3v59.execute-api.us-east-1.amazonaws.com/dev/token');
  this.passthrough('https://4x1srr3v59.execute-api.us-east-1.amazonaws.com/dev/analysis_by_year');
  
  this.get('/years', (schema) => {
    return { years: schema.db.years};
  });
}