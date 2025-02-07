//Latest Videos Function
function latestVideos() {
  $(document).ready(function () {
    // Dynamic videos
    $.ajax({
      url: "https://smileschool-api.hbtn.info/latest-videos",
      type: "GET",
      beforeSend: function () {
        $(".loader2").show();
      },
      success: function (res) {
        console.log(res);
        const carouselInner = $(".carousel-inner").eq(2);
        let itemsPerSlide = 4;

        // Update itemsPerSlide based on window size
        if (window.innerWidth < 576) {
          itemsPerSlide = 1;
        } else if (window.innerWidth < 768) {
          itemsPerSlide = 2;
        } else if (window.innerWidth < 992) {
          itemsPerSlide = 3;
        }

        // Calculate the number of slides needed
        let numOfSlides = Math.ceil(res.length / itemsPerSlide);
        let currentIndex = 0;

        // Loop through the number of slides and create containers for each slide
        for (let slideIndex = 0; slideIndex < numOfSlides; slideIndex++) {
          const slideContainer = $("<div>")
            .addClass("carousel-item")
            .toggleClass("active", slideIndex === 0);

          const row = $("<div>").addClass("row align-items-center mx-auto");

          // Add items to the slide
          for (let i = 0; i < itemsPerSlide; i++) {
            if (currentIndex >= res.length) break;

            const container = $("<div>").addClass(
              "col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center"
            );

            const card = $("<div>").addClass("card shadow-sm rounded-lg");

            const thumbnail = $("<img>")
              .attr("src", res[currentIndex]["thumb_url"])
              .addClass("card-img-top")
              .attr("alt", "Video thumbnail");

            const overlay = $("<div>").addClass("card-img-overlay text-center");
            const playIcon = $("<img>")
              .attr("src", "images/play.png")
              .attr("alt", "Play")
              .attr("width", 64)
              .addClass("align-self-center play-overlay");
            overlay.append(playIcon);

            const cardBody = $("<div>").addClass("card-body");

            const title = $("<h5>")
              .addClass("card-title font-weight-bold")
              .text(res[currentIndex]["title"]);

            const description = $("<p>")
              .addClass("card-text text-muted")
              .text(res[currentIndex]["sub-title"]);

            const creator = $("<div>").addClass(
              "creator d-flex align-items-center"
            );
            const creatorImg = $("<img>")
              .attr(
                "src",
                res[currentIndex]["author_pic_url"] || "images/profile_1.jpg"
              )
              .attr("alt", "Creator of Video")
              .attr("width", 30)
              .addClass("rounded-circle");
            const creatorName = $("<h6>")
              .addClass("pl-3 m-0 main-color")
              .text(res[currentIndex]["author"]);
            creator.append(creatorImg).append(creatorName);

            const info = $("<div>").addClass(
              "info pt-3 d-flex justify-content-between"
            );

            const rating = $("<div>").addClass("rating");
            let numOfStars = res[currentIndex]["star"];
            for (let j = 0; j < numOfStars; j++) {
              const star = $("<img>")
                .attr("src", "images/star_on.png")
                .attr("alt", "star on")
                .attr("width", 15);
              rating.append(star);
            }

            const duration = $("<span>")
              .addClass("main-color")
              .text(res[currentIndex]["duration"]);

            info.append(rating).append(duration);

            cardBody
              .append(title)
              .append(description)
              .append(creator)
              .append(info);

            card.append(thumbnail).append(overlay).append(cardBody);
            container.append(card);

            row.append(container);

            currentIndex++;
          }

          slideContainer.append(row);
          carouselInner.append(slideContainer);
        }
      },

      complete: function () {
        $(".loader2").hide();
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  });
}

// Popular Tutorials Function
function popTutorials() {
  $(document).ready(function () {
    $.ajax({
      url: "https://smileschool-api.hbtn.info/popular-tutorials",
      type: "GET",
      beforeSend: function () {
        $(".loader2").show();
      },
      success: function (res) {
        const carouselInner = $(".carousel-inner").eq(1);
        let itemsPerSlide = 4;

        // Update itemsPerSlide based on window size
        if (window.innerWidth < 576) {
          itemsPerSlide = 1;
        } else if (window.innerWidth < 768) {
          itemsPerSlide = 2;
        } else if (window.innerWidth < 992) {
          itemsPerSlide = 3;
        }

        // Calculate the number of slides needed
        let numOfSlides = Math.ceil(res.length / itemsPerSlide);
        let currentIndex = 0;

        // Loop through the number of slides and create containers for each slide
        for (let slideIndex = 0; slideIndex < numOfSlides; slideIndex++) {
          const slideContainer = $("<div>")
            .addClass("carousel-item")
            .toggleClass("active", slideIndex === 0);

          const row = $("<div>").addClass("row align-items-center mx-auto");

          // Add items to the slide
          for (let i = 0; i < itemsPerSlide; i++) {
            if (currentIndex >= res.length) break;

            const container = $("<div>").addClass(
              "col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center"
            );

            const card = $("<div>").addClass("card shadow-sm rounded-lg");

            const thumbnail = $("<img>")
              .attr("src", res[currentIndex]["thumb_url"])
              .addClass("card-img-top")
              .attr("alt", "Tutorial thumbnail");

            const overlay = $("<div>").addClass("card-img-overlay text-center");
            const playIcon = $("<img>")
              .attr("src", "images/play.png")
              .attr("alt", "Play")
              .attr("width", 64)
              .addClass("align-self-center play-overlay");
            overlay.append(playIcon);

            const cardBody = $("<div>").addClass("card-body");

            const title = $("<h5>")
              .addClass("card-title font-weight-bold")
              .text(res[currentIndex]["title"]);

            const description = $("<p>")
              .addClass("card-text text-muted")
              .text(res[currentIndex]["sub-title"]);

            const creator = $("<div>").addClass(
              "creator d-flex align-items-center"
            );
            const creatorImg = $("<img>")
              .attr(
                "src",
                res[currentIndex]["author_pic_url"] || "images/profile_1.jpg"
              )
              .attr("alt", "Creator of Tutorial")
              .attr("width", 30)
              .addClass("rounded-circle");
            const creatorName = $("<h6>")
              .addClass("pl-3 m-0 main-color")
              .text(res[currentIndex]["author"]);
            creator.append(creatorImg).append(creatorName);

            const info = $("<div>").addClass(
              "info pt-3 d-flex justify-content-between"
            );

            const rating = $("<div>").addClass("rating");
            let numOfStars = res[currentIndex]["star"];
            for (let j = 0; j < numOfStars; j++) {
              const star = $("<img>")
                .attr("src", "images/star_on.png")
                .attr("alt", "star on")
                .attr("width", 15);
              rating.append(star);
            }

            const duration = $("<span>")
              .addClass("main-color")
              .text(res[currentIndex]["duration"]);

            info.append(rating).append(duration);

            cardBody
              .append(title)
              .append(description)
              .append(creator)
              .append(info);

            card.append(thumbnail).append(overlay).append(cardBody);
            container.append(card);

            row.append(container);

            currentIndex++;
          }

          slideContainer.append(row);
          carouselInner.append(slideContainer);
        }
      },

      complete: function () {
        $(".loader2").hide();
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  });
}

// Quotes Function
function quotes() {
  $(document).ready(function () {
    // Dynamic quotes
    $.ajax({
      url: "https://smileschool-api.hbtn.info/quotes",
      type: "GET",
      beforeSend: function () {
        $(".loader").show();
      },
      success: function (res) {
        res.forEach((obj, idx) => {
          // Create the main carousel item div
          const carouselItem = $("<div>")
            .addClass("carousel-item")
            .toggleClass("active", idx === 0);

          // Create the row div
          const rowDiv = $("<div>").addClass("row mx-auto align-items-center");

          // Create the first column div
          const imgCol = $("<div>").addClass(
            "col-12 col-sm-2 col-lg-2 offset-lg-1 text-center"
          );

          // Create the image element
          const img = $("<img>")
            .attr("src", obj["pic_url"])
            .addClass("d-block align-self-center")
            .attr("alt", `Carousel Pic ${idx + 1}`);

          imgCol.append(img);

          // Create the text column div
          const textCol = $("<div>").addClass(
            "col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0"
          );

          const quoteTextDiv = $("<div>").addClass("quote-text");

          const paragraph = $("<p>").addClass("text-white").html(obj["text"]);

          const nameHeading = $("<h4>")
            .addClass("text-white font-weight-bold")
            .text(obj["name"]);

          const span = $("<span>").addClass("text-white").text(obj["title"]);

          quoteTextDiv.append(paragraph, nameHeading, span);
          textCol.append(quoteTextDiv);
          rowDiv.append(imgCol, textCol);
          carouselItem.append(rowDiv);

          // Append the carousel item to the carousel-inner
          $(".carousel-inner").eq(0).append(carouselItem);
        });
      },
      complete: function () {
        $(".loader").hide();
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  });
}
