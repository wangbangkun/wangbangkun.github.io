---
    layout: null
---

/**
 * 页面ready方法
 */
$(document).ready(function() {
    backToTop();
    /**
     * 侧边目录
     */
    $('.toc').length && $('.toc').each(function(i,o){
        $(o).toc({ listType: 'ul', headers: 'h1, h2, h3' });
    });
});

/**
 * 回到顶部
 */
function backToTop() {
    $("[data-toggle='tooltip']").tooltip();
    var st = $(".page-scrollTop");
    var $window = $(window);
    var topOffset;
    //滚页面才显示返回顶部
    $window.scroll(function() {
        var currnetTopOffset = $window.scrollTop();
        if (currnetTopOffset > 0 && topOffset > currnetTopOffset) {
            st.fadeIn(500);
        } else {
            st.fadeOut(500);
        }
        topOffset = currnetTopOffset;
    });

    //点击回到顶部
    st.click(function() {
        $(window).scrollTop(0);
    });


}