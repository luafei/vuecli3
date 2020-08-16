<template>
    <div class="test">
        <p>{{message}}</p>
<!--        <input type="text" v-focus value="test1">-->
<!--        <div id="hook-arguments-example" v-demo:foo="message"></div>-->
        <button @click="varyMessage">vary message</button>
<!--        <p v-pin:[direction]="200">Stick me 200px from the top of the page</p>-->
<!--        <el-tree-->
<!--                :props="props"-->
<!--                :load="loadNode"-->
<!--                lazy-->
<!--                >-->
<!--        </el-tree>-->
<!--        <el-select v-model="value" placeholder="请选择">-->
<!--            <el-option-->
<!--                    v-for="item in options"-->
<!--                    :key="item.value"-->
<!--                    :label="item.label"-->
<!--                    :value="item.value">-->

<!--            </el-option>-->
<!--        </el-select>-->
<!--        <p>{{value}}</p>-->
<!--        <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--            <el-tab-pane label="用户管理" name="first">-->
<!--                <p>用户管理： {{activeName}}</p>-->
<!--            </el-tab-pane>-->
<!--            <el-tab-pane label="配置管理" name="second">-->
<!--                <p>配置管理： {{activeName}}</p>-->
<!--            </el-tab-pane>-->
<!--            <el-tab-pane label="角色管理" name="third">-->
<!--                <p>角色管理： {{activeName}}</p>-->
<!--            </el-tab-pane>-->
<!--            <el-tab-pane label="定时任务补偿" name="fourth">-->
<!--                <p>定时任务补偿： {{activeName}}</p>-->
<!--            </el-tab-pane>-->
<!--        </el-tabs>-->
<!--        <el-table-->
<!--                :data="tableData"-->
<!--                border-->
<!--                style="width: 100%">-->
<!--            <el-table-column-->
<!--                    fixed-->
<!--                    prop="date"-->
<!--                    label="日期"-->
<!--                    width="150">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    prop="name"-->
<!--                    label="姓名"-->
<!--                    width="120">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    prop="province"-->
<!--                    label="省份"-->
<!--                    width="120">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    prop="city"-->
<!--                    label="市区"-->
<!--                    width="120">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    prop="address"-->
<!--                    label="地址"-->
<!--                    width="300">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    prop="zip"-->
<!--                    label="邮编"-->
<!--                    width="120">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--                    fixed="right"-->
<!--                    label="操作"-->
<!--                    width="100">-->
<!--                <template slot-scope="scope">-->
<!--                    <el-button @click="handleTableClick(scope.row)" type="text" size="small">查看</el-button>-->
<!--                    <el-button type="text" size="small">编辑</el-button>-->
<!--                </template>-->
<!--            </el-table-column>-->
<!--        </el-table>-->
    </div>
</template>

<script>
    export default {
        name: "TestDirective",
        data() {
            return {
                message: 'test directive',
                direction: 'right',
                props: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                },
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                activeName: 'first',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    test: '111'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333,
                    test: '222'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333,
                    test: '333'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                    test: '444'
                }]
            }
        },
        methods: {
            varyMessage() {
                console.log('varyMessage')
                this.foo = this.foo + 'ha'
            },
            handleClick(row) {
                console.log(row);
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region' }]);
                }
                if (node.level > 1) return resolve([]);

                setTimeout(() => {
                    const data = [{
                        name: 'leaf',
                        leaf: true
                    }, {
                        name: 'zone'
                    }];

                    resolve(data);
                }, 500);
            },
            handleTableClick(tab, event) {
                console.log(tab, event);
            }
        },
        directives: {
            focus: {
                // 指令的定义
                inserted: function (el) {
                    el.focus()
                }
            },
            demo: {
                bind: function (el, binding) {
                    var s = JSON.stringify
                    el.innerHTML =
                        'name: '       + s(binding.name) + '<br>' +
                        'value: '      + s(binding.value) + '<br>' +
                        'expression: ' + s(binding.expression) + '<br>' +
                        'argument: '   + s(binding.arg) + '<br>' +
                        'modifiers: '  + s(binding.modifiers) + '<br>'
                }
            },
            pin: {
                bind: function (el, binding) {
                    el.style.position = 'fixed';
                    var s = binding.arg
                    el.style[s] = binding.value + 'px';
                }
            }
        }
    }
</script>

<style scoped>

</style>