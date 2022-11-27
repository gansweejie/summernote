$(document).ready(function () {

  $("#getresult").click(function () {


    $("#code, #preview").html($("#summernote").summernote("code"));
  })

  $('#summernote').summernote({
    height: 300,
    toolbar: [
      ["paragraph", ["style"]],
      ["misc", ["undo", "redo", "codeview"]],
      ["fontsize", ["fontname", "fontsize", "color"]],
      ["style", ["bold", "italic", "underline", "strikethrough", "clear"]],
      ["paragraph", ["ol", "ul", "paragraph"]],
      ["insert", ["table", "link", "picture", "video", "hr"]]
    ],
    image: [
      ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
      ['float', ['floatLeft', 'floatRight', 'floatNone']],
      ['remove', ['removeMedia']],
      ['custom', ['imageTitle']],
    ],
  });

});