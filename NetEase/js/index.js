(function(){
    new Vue({
        el: '#subMenu',
        data: {
            lives: queryTop.data.cateList[0].subCateGroupList
        }
    });
}());