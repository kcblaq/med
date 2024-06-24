$(() => {
  // Function to handle file selection
  function handleFileSelect(evt) {
    const files = evt.target.files;
    displaySelectedFiles(files);
  }

  // Function to handle drag and drop
  function handleDrop(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    const files = evt.originalEvent.dataTransfer.files;
    displaySelectedFiles(files);
  }

  // Function to handle drag over
  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.originalEvent.dataTransfer.dropEffect = "copy";
  }

  // Display selected files and update the UI
  function displaySelectedFiles(files) {
    if (files.length > 0) {
      let fileList = "";
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileType = getFileType(file.name);
        if (fileType === "image") {
          // If image file, render as image
          fileList += `<img src="${URL.createObjectURL(file)}" alt="${
            file.name
          }" class="w-full h-full mx-auto mb-4 object-cover" />`;
        } else if (fileType === "pdf") {
          // If PDF file, render as PDF
          fileList += `<iframe src="${URL.createObjectURL(
            file
          )}#toolbar=0" style="width: 100%; height: 100%;"></iframe>`;
        } else {
          // Render other file types
          fileList += `<p>${file.name}</p>`;
        }
      }

      $("#uploaded-file").html(fileList);

      // Hide upload box
      $("#upload-box").addClass("hidden");
      $("#change-file-btn").removeClass("hidden");

      //   show the uploaded box
      $("#uploaded-file-box").removeClass("hidden").addClass("flex");
      $("#uploaded-toast").removeClass("hidden").addClass("flex");

      setTimeout(() => {
        $("#uploaded-toast").removeClass("flex").addClass("hidden");
      }, 3000);
    }
  }

  // Function to get file type
  function getFileType(fileName) {
    const extension = fileName.split(".").pop().toLowerCase();
    if (extension === "pdf") {
      return "pdf";
    } else if (["jpg", "jpeg", "png", "gif", "bmp"].includes(extension)) {
      return "image";
    } else {
      return "other";
    }
  }

  // Reset the file input and UI
  $("#change-file-btn").click(function () {
    // Trigger file input click
    $("#file-input").click();
  });

  // Event listeners
  $("#file-input").on("change", handleFileSelect);
  const uploadBox = $("#upload-box");
  uploadBox.on("dragover", handleDragOver);
  uploadBox.on("drop", handleDrop);
});
