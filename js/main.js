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
    if ($(".notification").hasClass("active")) {
      mui.overlay("on", options);
    } else {
      $(".notification").toggleClass("active");
      mui.overlay("off");
    }
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

  $(".detail-item").click(function () {
    $(this).toggleClass("show");
  });

  $(".master-detail-panel .list-targets tbody tr").click(function () {
    $(".master-detail-panel .wrapper-listTargets").addClass("w-50");
    $(".master-detail-panel .wrapper-listTargets").removeClass("w-100");
    $(".master-detail-panel .wrapper-detail").css("display", "block");
  });
  $(".cta-close").click(function () {
    $(".wrapper-listTargets").addClass("w-100");
    $(".wrapper-listTargets").removeClass("w-50");
    $(".wrapper-detail").css("display", "none");
  });
  $(".group").click(function () {
    let action = $(this).attr("aria-expanded");
    if (action == "true") {
      $(this).attr("aria-expanded", "false");
    } else {
      $(this).attr("aria-expanded", "true");
    }
  });
  $(".path-action").click(function () {
    $(this).parent().toggleClass("high");
    if ($(this).parent().hasClass("high")) {
      $(this).text("Include");
    } else {
      $(this).text("Exclude");
    }
  });
  setInterval(function () {
    if ($(".form").is(":checked") == true) {
      $("#label1").css("display", "block");
      $("#label2").css("display", "none");
    } else if ($(".raw").is(":checked") == true) {
      $("#label2").css("display", "block");
      $("#label1").css("display", "none");
    }
  });

  $('.checked').click(function(){
    $(this).parent().parent().parent().toggleClass('hidden')
  })
  $('.value input').keyup(function(){
    $('#label1').append("<div><div class='mui-flexbox label-input'><div class='value'><input type='text' placeholder='Description'></div><div class='value'><input type='text' placeholder='Key'></div><div class='value'><input type='text' placeholder='Value'></div></div></div>")
    console.log($('.value input').length);
  })
});
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
  });
}

var toggler = document.getElementsByClassName("path-action");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.parentElement
      .querySelector(".nested")
      .classList.toggle("high");
  });
}

const data = {
  labels: ["High"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300],
      backgroundColor: ["rgb(255, 99, 132)"],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Doughnut Chart",
      },
    },
  },
};

$('.action').click(function(){
  $(this).toggleClass('show');
  $('.box-chart').toggleClass('show');
})

const myChart = new Chart(document.getElementById("myChart"), config);
const myChart2 = new Chart(document.getElementById("myChart2"), config);
const myChart3 = new Chart(document.getElementById("myChart3"), config);

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const data5 = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [0, 5, 2, 10, 7, 9, 1, 8, 3, 4, 6, 5],
      fill: false,
      borderColor: "red",
      tension: 0.1,
    },
  ],
};
const config2 = {
  type: "line",
  data: data5,
};
const myChart4 = new Chart(document.getElementById("myChart4"), config2);
const myChart5 = new Chart(document.getElementById("myChart5"), config2);
const myChart6 = new Chart(document.getElementById("myChart6"), config2);
const myChart7 = new Chart(document.getElementById("myChart7"), config2);
