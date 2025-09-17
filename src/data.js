// EU Countries Array
export const EU_Countries = [
  { id: 1, name: 'Austria' },
  { id: 2, name: 'Belgium' },
  { id: 3, name: 'Bulgaria' },
  { id: 4, name: 'Croatia' },
  { id: 5, name: 'Cyprus' },
  { id: 6, name: 'Czech Republic' },
  { id: 7, name: 'Denmark' },
  { id: 8, name: 'Estonia' },
  { id: 9, name: 'Finland' },
  { id: 10, name: 'France' },
  { id: 11, name: 'Germany' },
  { id: 12, name: 'Greece' },
  { id: 13, name: 'Hungary' },
  { id: 14, name: 'Ireland' },
  { id: 15, name: 'Italy' },
  { id: 16, name: 'Latvia' },
  { id: 17, name: 'Lithuania' },
  { id: 18, name: 'Luxembourg' },
  { id: 19, name: 'Malta' },
  { id: 20, name: 'Netherlands' },
  { id: 21, name: 'Poland' },
  { id: 22, name: 'Portugal' },
  { id: 23, name: 'Romania' },
  { id: 24, name: 'Slovakia' },
  { id: 25, name: 'Slovenia' },
  { id: 26, name: 'Spain' },
  { id: 27, name: 'Sweden' }
];

// EU Parties Array - ordered as requested
export const EU_Parties = [
  { id: 1, name: "The Left in the European Parliament", seats: 41 },
  { id: 2, name: "Progressive Alliance of Socialists & Democrats", seats: 154 },
  { id: 3, name: "Greens/European Free Alliance", seats: 67 },
  { id: 4, name: "European People's Party", seats: 182 },
  { id: 5, name: "Renew Europe", seats: 108 },
  { id: 6, name: "European Conservatives and Reformists", seats: 62 }, // ✅ fixed spelling
  { id: 7, name: "Identity and Democracy", seats: 73 },
  { id: 8, name: "NI", seats: 57 },
  { id: 9, name: "Total", seats: 705 }
];

// EU Parliament Seats per country - keys renamed and ordered
export const EU_Parliament_Seats = [
  { country: 'Germany', "European People's Party": 34, "Progressive Alliance of Socialists & Democrats": 16, "Renew Europe": 9, "Greens/European Free Alliance": 9, "European Conservatives and Reformists": 8, "Identity and Democracy": 11, "The Left in the European Parliament": 8, NI: 1, "Total": 96 },
  { country: 'France', "European People's Party": 20, "Progressive Alliance of Socialists & Democrats": 16, "Renew Europe": 6, "Greens/European Free Alliance": 7, "European Conservatives and Reformists": 5, "Identity and Democracy": 12, "The Left in the European Parliament": 7, NI: 2, "Total": 79 },
  { country: 'Italy', "European People's Party": 25, "Progressive Alliance of Socialists & Democrats": 16, "Renew Europe": 8, "Greens/European Free Alliance": 6, "European Conservatives and Reformists": 4, "Identity and Democracy": 11, "The Left in the European Parliament": 5, NI: 1, "Total": 76 },
  { country: 'Spain', "European People's Party": 22, "Progressive Alliance of Socialists & Democrats": 20, "Renew Europe": 2, "Greens/European Free Alliance": 4, "European Conservatives and Reformists": 0, "Identity and Democracy": 6, "The Left in the European Parliament": 3, NI: 2, "Total": 59 },
  { country: 'Poland', "European People's Party": 27, "Progressive Alliance of Socialists & Democrats": 9, "Renew Europe": 0, "Greens/European Free Alliance": 0, "European Conservatives and Reformists": 5, "Identity and Democracy": 11, "The Left in the European Parliament": 0, NI: 0, "Total": 52 },
  { country: 'Romania', "European People's Party": 14, "Progressive Alliance of Socialists & Democrats": 10, "Renew Europe": 0, "Greens/European Free Alliance": 0, "European Conservatives and Reformists": 2, "Identity and Democracy": 7, "The Left in the European Parliament": 0, NI: 0, "Total": 33 },
  { country: 'Netherlands', "European People's Party": 10, "Progressive Alliance of Socialists & Democrats": 6, "Renew Europe": 4, "Greens/European Free Alliance": 1, "European Conservatives and Reformists": 3, "Identity and Democracy": 4, "The Left in the European Parliament": 1, NI: 0, "Total": 29 },
  { country: 'Belgium', "European People's Party": 8, "Progressive Alliance of Socialists & Democrats": 6, "Renew Europe": 3, "Greens/European Free Alliance": 2, "European Conservatives and Reformists": 1, "Identity and Democracy": 0, "The Left in the European Parliament": 1, NI: 0, "Total": 21 },
  { country: 'Sweden', "European People's Party": 4, "Progressive Alliance of Socialists & Democrats": 5, "Renew Europe": 3, "Greens/European Free Alliance": 3, "European Conservatives and Reformists": 0, "Identity and Democracy": 3, "The Left in the European Parliament": 2, NI: 1, "Total": 21 },
  { country: 'Portugal', "European People's Party": 8, "Progressive Alliance of Socialists & Democrats": 8, "Renew Europe": 1, "Greens/European Free Alliance": 2, "European Conservatives and Reformists": 0, "Identity and Democracy": 0, "The Left in the European Parliament": 2, NI: 0, "Total": 21 },
  { country: 'Hungary', "European People's Party": 14, "Progressive Alliance of Socialists & Democrats": 3, "Renew Europe": 0, "Greens/European Free Alliance": 0, "European Conservatives and Reformists": 0, "Identity and Democracy": 4, "The Left in the European Parliament": 0, NI: 0, "Total": 21 },
  { country: 'Austria', "European People's Party": 9, "Progressive Alliance of Socialists & Democrats": 4, "Renew Europe": 0, "Greens/European Free Alliance": 0, "European Conservatives and Reformists": 2, "Identity and Democracy": 3, "The Left in the European Parliament": 1, NI: 0, "Total": 19 },
  { country: 'Bulgaria', "European People's Party": 7, "Progressive Alliance of Socialists & Democrats": 6, "Renew Europe": 0, "Greens/European Free Alliance": 1, "European Conservatives and Reformists": 0, "Identity and Democracy": 2, "The Left in the European Parliament": 1, NI: 0, "Total": 17 },
  { country: 'Denmark', "European People's Party": 6, "Progressive Alliance of Socialists & Democrats": 4, "Renew Europe": 1, "Greens/European Free Alliance": 1, "European Conservatives and Reformists": 1, "Identity and Democracy": 1, "The Left in the European Parliament": 0, NI: 0, "Total": 14 },
  { country: 'Finland', "European People's Party": 5, "Progressive Alliance of Socialists & Democrats": 3, "Renew Europe": 2, "Greens/European Free Alliance": 1, "European Conservatives and Reformists": 2, "Identity and Democracy": 1, "The Left in the European Parliament": 0, NI: 0, "Total": 14 },
  { country: 'Slovakia', "European People's Party": 7, "Progressive Alliance of Socialists & Democrats": 4, "Renew Europe": 0, "Greens/European Free Alliance": 0, "European Conservatives and Reformists": 2, "Identity and Democracy": 1, "The Left in the European Parliament": 0, NI: 0, "Total": 14 },
  { country: 'Ireland', "European People's Party": 5, "Progressive Alliance of Socialists & Democrats": 4, "Renew Europe": 2, "Greens/European Free Alliance": 1, "European Conservatives and Reformists": 1, "Identity and Democracy": 0, "The Left in the European Parliament": 0, NI: 0, "Total": 13 },
  { country: 'Croatia', "European People's Party": 6, "Progressive Alliance of Socialists & Democrats": 4, "Renew Europe": 1, "Greens/European Free Alliance": 0, "European Conservatives and Reformists": 0, "Identity and Democracy": 1, "The Left in the European Parliament": 0, NI: 0, "Total": 12 },
  { country: 'Lithuania', "European People's Party": 6, "Progressive Alliance of Socialists & Democrats": 3, "Renew Europe": 1, "Greens/European Free Alliance": 0, "European Conservatives and Reformists": 1, "Identity and Democracy": 0, "The Left in the European Parliament": 0, NI: 0, "Total": 11 },
  { country: 'Slovenia', "European People's Party": 4, "Progressive Alliance of Socialists & Democrats": 2, "Renew Europe": 0, "Greens/European Free Alliance": 1, "European Conservatives and Reformists": 1, "Identity and Democracy": 0, "The Left in the European Parliament": 0, NI: 0, "Total": 8 },
  { country: 'Latvia', "European People's Party": 4, "Progressive Alliance of Socialists & Democrats": 3, "Renew Europe": 0, "Greens/European Free Alliance": 0, "European Conservatives and Reformists": 1, "Identity and Democracy": 0, "The Left in the European Parliament": 0, NI: 0, "Total": 8 },
  { country: 'Estonia', "European People's Party": 3, "Progressive Alliance of Socialists & Democrats": 1, "Renew Europe": 2, "Greens/European Free Alliance": 0, "European Conservatives and Reformists": 1, "Identity and Democracy": 0, "The Left in the European Parliament": 0, NI: 0, "Total": 7 },
  { country: 'Cyprus', "European People's Party": 3, "Progressive Alliance of Socialists & Democrats": 2, "Renew Europe": 0, "Greens/European Free Alliance": 0, "European Conservatives and Reformists": 0, "Identity and Democracy": 0, "The Left in the European Parliament": 1, NI: 0, "Total": 6 },
  { country: 'Luxembourg', "European People's Party": 3, "Progressive Alliance of Socialists & Democrats": 2, "Renew Europe": 0, "Greens/European Free Alliance": 1, "European Conservatives and Reformists": 0, "Identity and Democracy": 0, "The Left in the European Parliament": 0, NI: 0, "Total": 6 },
  { country: 'Malta', "European People's Party": 4, "Progressive Alliance of Socialists & Democrats": 1, "Renew Europe": 1, "Greens/European Free Alliance": 0, "European Conservatives and Reformists": 0, "Identity and Democracy": 0, "The Left in the European Parliament": 0, NI: 0, "Total": 6 }
];
