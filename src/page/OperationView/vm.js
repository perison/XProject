import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
import ElInput from "element-ui/packages/input/src/input.vue";
import lodash from 'lodash'
export default {
  components: {
    ElInput,
    ElButton},
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      code: -100,
      tableData: [],
      count: 10,
      numbers: ['1','2','3','4','5','6','7','8','9','10'],
      options: [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }, {
        value: '6',
        label: '6'
      }, {
        value: '7',
        label: '7'
      }, {
        value: '8',
        label: '8'
      }, {
        value: '9',
        label: '9'
      }, {
        value: '10',
        label: '10'
      },],
      checkedGroup: [],
      gambleInput: '',
      selectedNumbers: [],
      selectedRankings: [],
      buttonGroup: ['1000','2000','3000'],
      userList: [],
    }
  },
  beforeMount() {
    // this.getTableData();
    this.initializeCheckedGroup();
  },

  methods: {
    printX (log) {
      console.log(log);
    },

    changeInputNumber(index) {
      this.gambleInput = this.buttonGroup[index];
    },

    gamble(){
      this.printX('gamble');
    },

    initializeCheckedGroup(){
      for(let i = 0 ; i < 10 ; i++){
        this.checkedGroup.push([''])
      }
    },

    clearCheckedGroup(){
      for(let i = 0 ; i < 10 ; i++){
        this.checkedGroup.splice(i,1,[]);
      }
    },

    choose(){
      // if(this.selectedRankings.length === 0){
      //   this.clearCheckedGroup();
      // }
      this.clearCheckedGroup();
      for(let i=0;i<this.selectedRankings.length;i++){
        let index = parseInt(this.selectedRankings[i]) - 1;
        this.printX(index);
        this.checkedGroup.splice(index,1,this.selectedNumbers);
      }
    },

    oneKeyChoose(isReverse){
      // this.printX(this.selectedNumbers);
      let temp = [];
      if(isReverse){
        temp = lodash.difference(this.numbers,this.selectedNumbers);
        // this.printX('temp:'+temp);
      }else {
        temp = this.selectedNumbers;
      }
      for(let i=0;i<this.checkedGroup.length;i++){
        this.checkedGroup.splice(i,1,temp);
      }
      // this.printX('over');
    },

    getTableData() {
      this.$http({
          method: 'get',
          url: '/test',
        }
      ).then( response => {
          this.tableData = lodash.get(response,'data.data',[]);
          console.log(this.tableData);
      });
    },
  },
};
