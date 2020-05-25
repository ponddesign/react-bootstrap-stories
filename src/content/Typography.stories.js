import React from "react";

export default {
  title: "Content/Typography",
};

export const headings = () => (
  <>
    <h1>h1. Heading</h1>
    <h2>h2. Heading</h2>
    <h3>h3. Heading</h3>
    <h4>h4. Heading</h4>
    <h5>h5. Heading</h5>
    <h6>h6. Heading</h6>
  </>
);

export const headingsWithClassNames = () => (
  <>
    <p className="h1">h1. Heading</p>
    <p className="h2">h2. Heading</p>
    <p className="h3">h3. Heading</p>
    <p className="h4">h4. Heading</p>
    <p className="h5">h5. Heading</p>
    <p className="h6">h6. Heading</p>
  </>
);

export const customHeadings = () => (
  <h3>
    Fancy display heading{" "}
    <small className="text-muted">With faded secondary text</small>
  </h3>
);

export const displayHeadings = () => (
  <>
    <h1 className="display-1">Display 1</h1>
    <h1 className="display-2">Display 2</h1>
    <h1 className="display-3">Display 3</h1>
    <h1 className="display-4">Display 4</h1>
  </>
);

export const lead = () => (
  <p className="lead">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis
    mollis, est non commodo luctus.
  </p>
);

export const inlineElements = () => (
  <>
    <p>
      You can use the mark tag to <mark>highlight</mark> text.
    </p>
    <p>
      <del>This line of text is meant to be treated as deleted text.</del>
    </p>
    <p>
      <s>This line of text is meant to be treated as no longer accurate.</s>
    </p>
    <p>
      <ins>
        This line of text is meant to be treated as an addition to the document.
      </ins>
    </p>
    <p>
      <u>This line of text will render as underlined</u>
    </p>
    <p>
      <small>This line of text is meant to be treated as fine print.</small>
    </p>
    <p>
      <strong>This line rendered as bold text.</strong>
    </p>
    <p>
      <em>This line rendered as italicized text.</em>
    </p>
  </>
);

export const abbreviations = () => (
  <>
    <p>
      <abbr title="attribute">attr</abbr>
    </p>
    <p>
      <abbr title="HyperText Markup Language" className="initialism">
        HTML
      </abbr>
    </p>
  </>
);

export const blockquotes = () => (
  <blockquote className="blockquote">
    <p className="mb-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.
    </p>
  </blockquote>
);

export const blockquoteWithSource = () => (
  <blockquote className="blockquote">
    <p className="mb-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.
    </p>
    <footer className="blockquote-footer">
      Someone famous in <cite title="Source Title">Source Title</cite>
    </footer>
  </blockquote>
);

export const blockquoteAlignment = () => (
  <>
    <blockquote className="blockquote text-center">
      <p className="mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
    <blockquote className="blockquote text-right">
      <p className="mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </>
);

export const listUnstyled = () => (
  <ul className="list-unstyled">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
);

export const listInline = () => (
  <ul className="list-inline">
    <li className="list-inline-item">Lorem ipsum</li>
    <li className="list-inline-item">Phasellus iaculis</li>
    <li className="list-inline-item">Nulla volutpat</li>
  </ul>
);

export const descriptionList = () => (
  <dl className="row">
    <dt className="col-sm-3">Description lists</dt>
    <dd className="col-sm-9">
      A description list is perfect for defining terms.
    </dd>

    <dt className="col-sm-3">Euismod</dt>
    <dd className="col-sm-9">
      <p>
        Vestibulum id ligula porta felis euismod semper eget lacinia odio sem
        nec elit.
      </p>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
    </dd>

    <dt className="col-sm-3">Malesuada porta</dt>
    <dd className="col-sm-9">
      Etiam porta sem malesuada magna mollis euismod.
    </dd>

    <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
    <dd className="col-sm-9">
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
      ut fermentum massa justo sit amet risus.
    </dd>

    <dt className="col-sm-3">Nesting</dt>
    <dd className="col-sm-9">
      <dl className="row">
        <dt className="col-sm-4">Nested definition list</dt>
        <dd className="col-sm-8">
          Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
        </dd>
      </dl>
    </dd>
  </dl>
);
