import React from "react";

export default {
  title: "Content/Code",
};

export const inline = () => (
  <>
    For example, <code>&lt;section&gt;</code> should be wrapped as inline.
  </>
);

export const blocks = () => (
  <pre>
    <code>
      {"<p>Sample text here...</p>"}
      {"\n"}
      {"<p>And another line of sample text here...</p>"}
    </code>
  </pre>
);

export const variables = () => (
  <>
    <var>y</var> = <var>m</var>
    <var>x</var> + <var>b</var>
  </>
);

export const userInput = () => (
  <>
    To switch directories, type <kbd>cd</kbd> followed by the name of the
    directory.
    <br />
    To edit settings, press{" "}
    <kbd>
      <kbd>ctrl</kbd> + <kbd>,</kbd>
    </kbd>
  </>
);

export const sampleOutput = () => (
  <samp>
    This text is meant to be treated as sample output from a computer program.
  </samp>
);
