let app = new Vue({
    el: '#tablazat',
    data: {
      rows: [
        {
          title: 'Kerék',
          price: 100,
          quantity: 12
        },
        {
          title: 'Teleszkóp',
          price: 1000,
          quantity: 300
        },
        {
          title: 'Kormány',
          price: 230,
          quantity: 5
        },
        {
          title: 'Ajtó',
          price: 45120,
          quantity: 321
        },
      ],
      nameInput: "",
      priceInput: "",
      qtyInput: ""
    },
    methods: {
        add: function () {
            if (this.nameInput !== "" && this.priceInput !== "" && this.qtyInput !== "") {
                var newLine = {
                    title: this.nameInput,
                    price: this.priceInput,
                    quantity: this.qtyInput
                };
                this.rows.push(newLine);
                this.nameInput = "";
                this.priceInput = "";
                this.qtyInput = "";
            } else {
                alert("Egyik mezo sem maradthat ures");
            }
          }
    }
  })