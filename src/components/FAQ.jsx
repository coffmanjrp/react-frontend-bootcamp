const FAQ = () => {
  return (
    <section id="questions" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion accordion-flush" id="questions">
          <div className="accordion-item">
            <h2 className="accordion-header" id="question-heading-one">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-collapse-one"
                aria-expanded="false"
                aria-controls="question-collapse-one"
              >
                Where exactly are you located?
              </button>
            </h2>
            <div
              id="question-collapse-one"
              className="accordion-collapse collapse"
              aria-labelledby="question-heading-one"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="question-heading-two">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-collapse-two"
                aria-expanded="false"
                aria-controls="question-collapse-two"
              >
                How much does it cost to attend?
              </button>
            </h2>
            <div
              id="question-collapse-two"
              className="accordion-collapse collapse"
              aria-labelledby="question-heading-two"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="question-heading-three">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-collapse-three"
                aria-expanded="false"
                aria-controls="question-collapse-three"
              >
                What do I need to Know?
              </button>
            </h2>
            <div
              id="question-collapse-three"
              className="accordion-collapse collapse"
              aria-labelledby="question-heading-three"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="question-heading-four">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-collapse-four"
                aria-expanded="false"
                aria-controls="question-collapse-four"
              >
                How Do I sign up?
              </button>
            </h2>
            <div
              id="question-collapse-four"
              className="accordion-collapse collapse"
              aria-labelledby="question-heading-four"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="question-heading-five">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-collapse-five"
                aria-expanded="false"
                aria-controls="question-collapse-five"
              >
                Do you help me find a job?
              </button>
            </h2>
            <div
              id="question-collapse-five"
              className="accordion-collapse collapse"
              aria-labelledby="question-heading-five"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
