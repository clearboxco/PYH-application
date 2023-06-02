
const select = document.getElementById('state');
const states = ['AL',
'NE',
'AK',
'NV',
'AZ',
'NH',
'AR',
'NJ',
'CA',
'NM',
'CO',
'NY',
'CT',
'NC',
'DE',
'ND',
'DC',
'OH',
'FL',
'OK',
'GA',
'OR',
'HI',
'PA',
'ID',
'PR',
'IL',
'RI',
'IN',
'SC',
'IA',
'SD',
'KS',
'TN',
'KY',
'TX',
'LA',
'UT',
'ME',
'VT',
'MD',
'VA',
'MA',
'VI',
'MI',
'WA',
'MN',
'WV',
'MS',
'WI',
'MO',
'WY',
'MT',
];

states.sort()


for (let i = 0; i < states.length; i++) {
    const option = document.createElement('option');
    option.value = states[i];
    option.text = states[i];
    select.appendChild(option);
}


const select2 = document.getElementById('prop-type');
const prop_types = ['Single Family Residential', 'Mobile/Manufactured Home',
                    'Townhouse', 'Multi-Family (2-4 Unit)', 
                    'Condo/Co-op','Multi-Family (5+ Unit)']


for (let i = 0; i < prop_types.length; i++) {
    const option = document.createElement('option');
    option.value = prop_types[i];
    option.text = prop_types[i];
    select2.appendChild(option);
}