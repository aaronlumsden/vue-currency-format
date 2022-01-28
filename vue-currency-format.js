const defaultOptions = {
    local: 'en',
    currency: 'GBP',
    hideSubUnits: false,
    subunitsValue: true
}

export default {

    install(Vue, options) {

        var userOptions = { ...defaultOptions, ...options };
        

      Vue.filter("currency",(value,local = false,currency = false,hideSubUnits = false, subunitsValue = false)=>{

        if(! Number.isInteger(value)){
            console.error('Number provided to money-format is not an integer'); return 0;
        }

        if(local){ userOptions.local = local;}
        if(currency){ userOptions.currency = currency;}
        if(hideSubUnits){ userOptions.hideSubUnits = hideSubUnits;}
        if(subunitsValue){ userOptions.subunitsValue = subunitsValue;}
 
   

        if(userOptions.subunitsValue){
            value = value/100;
        }

        if(userOptions.hideSubUnits){
            var $amount = new Intl.NumberFormat(userOptions.local, { style: 'currency', currency: userOptions.currency,  minimumFractionDigits: 0 , maximumFractionDigits: 0}); 
        } else {
            var $amount = new Intl.NumberFormat(userOptions.local, { style: 'currency', currency: userOptions.currency }); 
        }
        
        return $amount.format((value));
        
      })
    },
  };