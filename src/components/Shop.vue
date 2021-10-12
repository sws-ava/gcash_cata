<template>
  <div class="container catalog">
    <div class="row mb100">
      <div class="col-12">
        <h1 class="">Catalog</h1>
      </div>
    </div>
  </div>
  <div class="container-fluid catalog mb200">
    <div class="row row_pos_rel">
      <div class="p0 col-12 col-lg-3 filter_hide">
        <div class="row">
          <div class="col-12">
            <div class="cata_filter_holder">
              <form  id="form_filter" action="">
                <div class="cata_filter_holder_close_btn d-block d-lg-none">
                  <div class="menu_x_btn">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div class="filter__title">Country</div>

                <!-- countries V-FOR start -->
                <div
                  v-for="(country, index) in countries"
                  :key="'country' + index"
                  class="cats__holder"
                >
                  <label :for="'country__' + country.id">
                    <input
                      class="checkbox__real"
                      :id="'country__' + country.id"
                      type="radio"
                      name="choice_country"
                      @click="filterCountry=country.id"
                    />
                    <span class="checkbox__fake"></span>
                    {{ country.name }}
                  </label>
                </div>
                <!-- countries V-FOR end -->

                <!-- categories V-FOR start -->
                <div class="filter__title">Category</div>
                <div
                  v-for="(category, index) in categories"
                  :key="'category_' + index"
                  class="cats__holder"
                >
                  <label :for="'cat__' + category.categories_id">
                    <input
                      class="checkbox__real"
                      :id="'cat__' + category.categories_id"
                      type="radio"
                      name="choice_cat"
                      :value="category.categories_id"
                      @click="filterCat=category.categories_id"
                    />
                    <span class="checkbox__fake"></span>
                    {{ category.alias }}
                  </label>
                </div>
                <!-- categories V-FOR end -->

                <!-- <button type="submit" class="gold_line_btn">Show</button> -->
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="p0 col-12 col-lg-9 offst-0 offset-lg-3">
        <div class="container">
          <div class="row">
            <div class="col-12 d-block d-lg-none">
              <a
                href="#form_filter"
                class="gold_line_btn cata_filter_holder_close_btn mb-4"
              >
                Filter
              </a>
            </div>
            <div
              v-for="(goodsItem,index) in filterCata"
              :key="'goods_' + index"
              class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb100"
            >
              <div class="cata_item_holder">
                <a href="">
                  <div class="image_holder">
                    <div
                      class="image_inner"
                      :style="{
                        'background-image':
                          'url(https://goldencash.store/source/files/catalog/uzb/' +
                          goodsItem.cat_image +
                          '.jpg)',
                      }"
                    ></div>
                  </div>
                  <div class="info_holder">
                    <div class="cata_item__title">
                      {{ maskCata[goodsItem.cat_type] }}
                    </div>
                    <div class="cata_item__price pl-2">
                      ${{ goodsItem.cat_price }}
                    </div>
                  </div>
                  <div class="cata_item__brand">
                    {{ goodsItem.cat_code }} - {{ goodsItem.catalog_id }}
                  </div>
                  Add to card &nbsp;&nbsp;&nbsp;
                  <img class="" src="../assets/images/right_arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
// import axios from "axios";

//cat_geo
// 1. Турция
// 2. Узбекистан
// 3. Киргистан
// 4. Таджикистан
// 6. Казахстан - подготовить к добавлению

// cat_type
// 1	ring
// 2	earrings
// 3	bracelets
// 4	chains
// 5	necklace
// 6	accessories
// 7	cards

import catalog from "./catalog.json";
import categories from "./categories.json";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  computed:{
    filterCata () {
      if(this.filterCountry!=="" && this.filterCat!==""){
        return this.filterBy(this.filterBy(this.goods1, this.filterCountry, 'cat_geo'), this.filterCat, 'cat_type');
      }else if(this.filterCountry!=="" ){
        return this.filterBy(this.goods1, this.filterCountry, 'cat_geo');
      }else if(this.filterCat!=="" ){
        return this.filterBy(this.goods1, this.filterCat, 'cat_type');
      }
      else{
        return this.goods1
      }
    },
  },
  data() {
    return {
      filterCountry: "",
      filterCat: "",
      maskCata: {
        1: "Ring",
        2: "Ear",
        3: "Bracelets",
        4: "Chains",
        5: "Necklace",
        6: "Accessories",
      },
      countries: [
        { id: 1, name: "Turkey" },
        { id: 2, name: "Uzbekistan" },
        { id: 3, name: "Kyrgyzstan" },
        { id: 4, name: "Tajikistan" },
        { id: 5, name: "Kazakhstan" },
      ],
      categories: categories,
      goods: catalog,
      goods1: [
        {
          catalog_id: "1295",
          cat_image: "Uzb_ring_B28_8.1gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "8,1",
          cat_type: "1",
          cat_price: "689",
          cat_code: "b28",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "1",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1296",
          cat_image: "Uzb_ring_B29_7.8gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,8",
          cat_type: "1",
          cat_price: "663",
          cat_code: "b29",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1297",
          cat_image: "Uzb_ring_B30_7.8gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,8",
          cat_type: "1",
          cat_price: "663",
          cat_code: "b30",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1298",
          cat_image: "Uzb_ring_B31_7.2gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,2",
          cat_type: "2",
          cat_price: "612",
          cat_code: "b31",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1299",
          cat_image: "Uzb_ring_B32_7.0gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7",
          cat_type: "5",
          cat_price: "595",
          cat_code: "b32",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1300",
          cat_image: "Uzb_ring_B33_7.7gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,7",
          cat_type: "1",
          cat_price: "655",
          cat_code: "b33",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1301",
          cat_image: "Uzb_ring_B34_7.8gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,8",
          cat_type: "3",
          cat_price: "663",
          cat_code: "b34",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1302",
          cat_image: "Uzb_ring_B35_10.4gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "10,4",
          cat_type: "1",
          cat_price: "884",
          cat_code: "b35",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1303",
          cat_image: "Uzb_ring_B36_10.1gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "10,1",
          cat_type: "5",
          cat_price: "859",
          cat_code: "b36",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1304",
          cat_image: "Uzb_ring_B37_7.0gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7",
          cat_type: "1",
          cat_price: "595",
          cat_code: "b37",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1305",
          cat_image: "Uzb_ring_B38_7.1gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,1",
          cat_type: "1",
          cat_price: "604",
          cat_code: "b38",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1306",
          cat_image: "Uzb_ring_B39_7.6gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,6",
          cat_type: "1",
          cat_price: "646",
          cat_code: "b39",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1307",
          cat_image: "Uzb_ring_B40_8.0gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "8",
          cat_type: "1",
          cat_price: "680",
          cat_code: "b40",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1308",
          cat_image: "Uzb_ring_B41_7.5gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,5",
          cat_type: "1",
          cat_price: "638",
          cat_code: "b41",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1309",
          cat_image: "Uzb_ring_B42_7.2gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,2",
          cat_type: "1",
          cat_price: "612",
          cat_code: "b42",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1310",
          cat_image: "Uzb_ring_B43_7.3gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,3",
          cat_type: "1",
          cat_price: "621",
          cat_code: "b43",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1311",
          cat_image: "Uzb_ring_B44_7.6gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,6",
          cat_type: "1",
          cat_price: "646",
          cat_code: "b44",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
        {
          catalog_id: "1312",
          cat_image: "Uzb_ring_B45_7.2gr_1-85$_fianit_16-19.5",
          cat_title: "",
          cat_urlname: "",
          cat_content: "16-19,5",
          cat_spec: "7,2",
          cat_type: "1",
          cat_price: "612",
          cat_code: "b45",
          cat_order: "0",
          cat_hide: "0",
          cat_material: "1",
          cat_stone: "fianit",
          cat_geo: "2",
          cat_currency: "",
          cat_itemtype: "",
          cat_available: "",
          cat_sale: "0",
          cat_weight: "0",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
        },
      ],
    };
  },
  methods: {

  },
};
</script>

<style >
.catalog .cats__holder label {
  text-transform: capitalize;
}
</style>
