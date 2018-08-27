<template>
  <el-container style="height: 600px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">账号一</el-menu-item>
            <el-menu-item index="1-2">账号二</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="select_div">
          <div class="select_div_child">
            <el-select v-model="selectedRankings" multiple placeholder="请选择名次">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_div_child">
            <el-select v-model="selectedNumbers" multiple placeholder="请选择号码">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_div_child">
            <el-button type="primary" @click="choose">确定</el-button>
            <!--<el-button @click="oneKeyChoose(true)">-->
              <!--反选-->
            <!--</el-button>-->
          </div>
        </div>
        <div class="gamble_div">
          <div v-for="index in buttonGroup.length" class="gamble_div_child">
            <el-button @click="changeInputNumber(index-1)" type="primary" plain>
              {{buttonGroup[index-1]}}
            </el-button>
          </div>
          <div class="gamble_div_child">
            <el-input type="text" v-model="gambleInput" placeholder="请输入金额" maxlength="5" style="width: 110px"></el-input>
          </div>
          <div class="gamble_div_child">
            <el-button @click="gamble" type="danger">下注</el-button>
          </div>
          <div class="gamble_div_child">
            <!--<el-dropdown>-->
              <!--<i class="el-icon-setting" style="margin-left: 15px"></i>-->
              <!--&lt;!&ndash;<el-dropdown-menu slot="dropdown">&ndash;&gt;-->
                <!--&lt;!&ndash;<el-dropdown-item>查看</el-dropdown-item>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-dropdown-item>新增</el-dropdown-item>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-dropdown-item>删除</el-dropdown-item>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-dropdown-menu>&ndash;&gt;-->
            <!--</el-dropdown>-->
            <i class="el-icon-setting" style="margin-left: 15px"></i>
            <span>设置默认值</span>
          </div>
        </div>
      </el-header>
      <el-main>
        <div>
          <div class="checkedDiv" v-for="cnt in checkedGroup.length">第{{cnt}}名:
              <el-checkbox-group size="mediun" v-model="checkedGroup[cnt-1]">
                <el-checkbox-button v-for="number in numbers" :label="number" :key="number">
                  {{number}}
                </el-checkbox-button>
              </el-checkbox-group>
          </div>
        </div>
      </el-main>
      <!--<el-footer style="background-color: rgb(238, 241, 246)">Footer</el-footer>-->
    </el-container>
  </el-container>

</template>

<script>
import ElInput from "../../../node_modules/element-ui/packages/input/src/input.vue";

export { default }  from './vm'
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-select {
    width: 180px;
  }

  .el-input {
    width: 100px;
  }

  .gamble_div {
    float: right;
  }

  .gamble_div_child {
    float: left;
  }

  .select_div_child {
    float: left;
    /*border: 1px solid black;*/
  }

  .select_div {
    float: left;
    /*border: 1px solid black;*/
  }

  .checkedDiv {
    float: left;
    margin: 10px 6px;
  }

</style>
