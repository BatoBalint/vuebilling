<template>
  <div id="app">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-8 mx-auto">
          <div id="tablazat">
            <table class="table table-dark text-light">
              <tr>
                <th>Nev</th>
                <th>Ar</th>
                <th>Mennyiseg</th>
                <th>Operations</th>
              </tr>
              <tr v-for="item in rows" v-bind:key="item.title">
                <td>{{ item.title }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.quantity }}</td>
                <td>
                  <button class="btn btn-danger bg-danger" v-on:click="deleteElem(item.title)">X</button>
                  <button class="btn btn-warning bg-warning" v-on:click="editElem">Edit</button>
                </td>
              </tr>
                <tr>
                  <td><input class="form-control text-light bg-dark" type="text" placeholder="Nev" v-model="nameInput"></td>
                  <td><input class="form-control text-light bg-dark" type="number" placeholder="Ar" v-model="priceInput"></td>
                  <td><input class="form-control text-light bg-dark" type="number" placeholder="Mennyiseg" v-model="qtyInput"></td>
                  <td><input class="btn btn-success" type="submit" value="Add" v-on:click="add"></td>
                </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    add() {
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
    },
    deleteElem(title) {
      for (let row of this.rows) {
        if (row.title == title) {
          this.rows.splice(this.rows.indexOf(row), 1);
        }
      }
    },
    editElem() {
      alert("not implemented yet");
    }
  },
  data() {
    return {
      "nameInput": "",
      "priceInput": "",
      "qtyInput": "",
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
      ]
    }
  }
}
</script>

<style>
  tr {
    margin: 10px 0;
    padding: 5px 0;
  }
  button {
    margin-right: 10px;
  }
</style>
