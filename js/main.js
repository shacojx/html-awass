jQuery(function ($) {
  var $bodyEl = $("body"),
    $sidedrawerEl = $("#sidedrawer");

  // ==========================================================================
  // Toggle Sidedrawer
  // ==========================================================================
  function showSidedrawer() {
    // show overlay
    var options = {
      onclose: function () {
        $sidedrawerEl.removeClass("active").appendTo(document.body);
      },
    };

    var $overlayEl = $(mui.overlay("on", options));

    // show element
    $sidedrawerEl.appendTo($overlayEl);
    setTimeout(function () {
      $sidedrawerEl.addClass("active");
    }, 20);
  }

  function hideSidedrawer() {
    $bodyEl.toggleClass("hide-sidedrawer");
  }

  $(".js-show-sidedrawer").on("click", showSidedrawer);
  $(".js-hide-sidedrawer").on("click", hideSidedrawer);

  // ==========================================================================
  // Animate menu
  // ==========================================================================
  var $titleEls = $("strong", $sidedrawerEl);

  $titleEls.next().hide();

  $titleEls.on("click", function () {
    $(this).next().slideToggle(200);
  });
  //   --------------------
  $("#checkedAll").change(function () {
    if (this.checked) {
      $(".checkSingle").each(function () {
        this.checked = true;
      });
    } else {
      $(".checkSingle").each(function () {
        this.checked = false;
      });
    }
  });

  $(".checkSingle").click(function () {
    if ($(this).is(":checked")) {
      var isAllChecked = 0;
      $(".checkSingle").each(function () {
        if (!this.checked) isAllChecked = 1;
      });
      if (isAllChecked == 0) {
        $("#checkedAll").prop("checked", true);
      }
    } else {
      $("#checkedAll").prop("checked", false);
    }
  });
  //   ------------------------------------
  $(".select-filter li").click(function () {
    const value = $(this).text();
    $(".input-filter").append(`<span class="filter-control">${value}</span>`);
    $(this).remove();
  });
  $(".filter").click(function () {
    $(".select-filter").toggle();
    $(".filter").toggleClass("active");
  });
  $(".notifi").click(function () {
    $(".notification").toggleClass("active", options);
    var options = {
      onclose: function () {
        $(".notification").toggleClass("active");
      },
    };
    // mui.overlay("on", options);
  });
  //   $(".input-filter span").click(function(){
  //     const value = $(this).text();
  //     $(".select-filter").append(`<li>${value}</li>`);
  //     $(this).remove()
  //   })
  $(".aside-wrapper li").click(function () {
    $(".aside-wrapper li").removeClass("active");
    $(this).addClass("active");
  });
});
