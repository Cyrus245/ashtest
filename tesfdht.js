<Col md={11} className="mx-auto">
  <Swiper
    pagination={{ clickable: true }}
    slidesPerView={3}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 3,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    spaceBetween={10}
  >
    {reviews?.length === 0 ? (
      <div className="text-center">
        <Spinner />
      </div>
    ) : showMore ? (
      reviews?.map((review) => {
        return (
          <SwiperSlide key={review._id}>
            {/* <Review review={review} key={review._key}/> */}
            <ProjectCard review={review} key={review._id} />
          </SwiperSlide>
        );
      })
    ) : (
      reviews?.slice(0, 9).map((review) => {
        return (
          <SwiperSlide key={review._id}>
            {/* <Review review={review} key={review._key}/> */}
            <ProjectCard review={review} key={review._id} />
          </SwiperSlide>
        );
      })
    )}
  </Swiper>
</Col>;
{
  showMore ? (
    <button onClick={() => setShowMore(false)} className="moreBtn text-center">
      Hide Projects
    </button>
  ) : (
    <button onClick={() => setShowMore(true)} className="moreBtn text-center">
      More Projects
    </button>
  );
}
