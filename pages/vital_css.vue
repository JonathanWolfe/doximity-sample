<template>
  <div class="page-components">
    <div class="row hero">
      <div class="section">
        <h1>Components</h1>
      </div>
    </div>

    <div class="row">
      <div class="section">
        <h1>Grid</h1>
        <h2>Usage</h2>
        <p>
          Example usage:
          <code>.col-1-2</code> means 1 of 2 columns.
          <code>.col-2-3</code> means 2 of 3 columns and so fourth.
          You can create most basic layouts with these grid classes.
        </p>
        <div class="grid-preview">
          <div class="col-1-2">
            .col-1-2
          </div>
          <div class="col-1-2">
            .col-1-2
          </div>
          <div class="col-1-3">
            .col-1-3
          </div>
          <div class="col-2-3">
            .col-2-3
          </div>
          <div class="col-1-3">
            .col-1-3
          </div>
          <div class="col-1-3">
            .col-1-3
          </div>
          <div class="col-1-3">
            .col-1-3
          </div>
          <div class="col-1-4">
            .col-1-4
          </div>
          <div class="col-1-4">
            .col-1-4
          </div>
          <div class="col-1-4">
            .col-1-4
          </div>
          <div class="col-1-4">
            .col-1-4
          </div>
          <div class="col-1-4">
            .col-1-4
          </div>
          <div class="col-3-4">
            .col-3-4
          </div>
          <div class="clear" />
        </div>
        <p>
          <code>.col-1-5</code> and <code>.col-1-8</code> Do not have accompanying classes.
          They are designed to be equally sized.
        </p>
        <div class="grid-preview">
          <div class="col-1-5">
            .col-1-5
          </div>
          <div class="col-1-5">
            .col-1-5
          </div>
          <div class="col-1-5">
            .col-1-5
          </div>
          <div class="col-1-5">
            .col-1-5
          </div>
          <div class="col-1-5">
            .col-1-5
          </div>
          <div class="col-1-8">
            .col-1-8
          </div>
          <div class="col-1-8">
            .col-1-8
          </div>
          <div class="col-1-8">
            .col-1-8
          </div>
          <div class="col-1-8">
            .col-1-8
          </div>
          <div class="col-1-8">
            .col-1-8
          </div>
          <div class="col-1-8">
            .col-1-8
          </div>
          <div class="col-1-8">
            .col-1-8
          </div>
          <div class="col-1-8">
            .col-1-8
          </div>
          <div class="clear" />
        </div>
        <h2>Grid Padding</h2>
        <p>
          The grid is not padded by default, but if you choose, you can pad the grid evenly on the
          left and right sides by nesting your grid elements under: <code>.padded</code> padding.
        </p>
        <div class="grid-preview">
          <div class="padded">
            <div class="col-2-3">
              .col-2-3
            </div>
            <div class="col-1-3">
              .col-1-3
            </div>
          </div>
          <div class="clear" />
        </div>
        <p>
          If your layouts are heavy on typography you can use the <code>.right-padded</code> class
          by nesting your <code>.col-</code>'s under <code>.right-padded</code>:
        </p>
        <div class="grid-preview">
          <div class="right-padded">
            <div class="col-2-3">
              .col-2-3
            </div>
            <div class="col-1-3">
              .col-1-3
            </div>
          </div>
          <div class="clear" />
        </div>
        <p>
          You can also use <code>.row</code>to automatically clear <code>.col-</code>markup.
          Alternatively, you can also use <code>.clear</code>at the end of
          <code>.col-</code>to clear columns.
        </p>
        <p>
          <span>Empty grid columns need content within to work properly. In most cases you'll want
            to hide them on your handheld breakpoint.</span> Add <code>.space</code>to your
          <code>.col-</code>markup if you'd like an empty column to exist.
          The <code>.space</code>class hides those empty columns automatically within the
          <code>$handheld</code> media query.
        </p>
        <div class="empty-grid-preview center">
          <div class="col-1-3 space">
            <p><code>.col-1-3.space</code></p>
          </div>
          <div class="col-1-3">
            <p><code>.col-1-3 Some content.</code></p>
          </div>
          <div class="col-1-3 space">
            <p><code>.col-1-3.space</code></p>
          </div>
          <div class="clear" />
          <div class="empty-render">
            <div class="col-1-3 space" />
            <div class="col-1-3">
              <p>Some content.</p>
            </div>
            <div class="col-1-3 space" />
            <div class="clear" />
          </div>
        </div>
        <h2>Automatic Grid</h2>
        <p>
          Use the automatic grid if you don't need to be specific about your columns and only need
          equally sized columns. You can create an unlimited amount of columns automatically:
        </p>
        <div class="grid-preview">
          <div class="autogrid">
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
          </div>
          <div class="autogrid">
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
          </div>
          <div class="autogrid">
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
          </div>
          <div class="autogrid">
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
          </div>
          <div class="autogrid">
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
          </div>
          <div class="autogrid">
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
            <div class="col">
              .col
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="section">
        <h1>Buttons</h1>
        <hr>
        <h2>Size options</h2>
        <div class="autogrid">
          <div class="col">
            <p>Large: </p>
            <p><code>.btn.large</code></p>
            <p>
              <a
                href="#"
                class="btn large"
              >btn large</a>
            </p>
          </div>
          <div class="col">
            <p>Default: </p>
            <p><code>.btn</code></p>
            <p>
              <a
                href="#"
                class="btn"
              >btn</a>
            </p>
          </div>
          <div class="col">
            <p>Small: </p>
            <p><code>.btn.small</code></p>
            <p>
              <a
                href="#"
                class="btn small"
              >btn small</a>
            </p>
          </div>
          <div class="col">
            <p>Tiny: </p>
            <p><code>.btn.tiny</code></p>
            <p>
              <a
                href="#"
                class="btn tiny"
              >btn tiny</a>
            </p>
          </div>
          <div class="col">
            <p>Full width: </p>
            <p><code>.btn.full</code></p>
            <p>
              <a
                href="#"
                class="btn full"
              >btn full</a>
            </p>
          </div>
        </div>
        <div class="clear" />
        <h2>Shape and fill options</h2>
        <div class="col-1-5">
          <p>Grays</p>
          <p>
            <a
              href="#"
              class="btn small gray-light"
            >gray-light</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small"
            >btn</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small gray-dark"
            >gray-dark</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small black"
            >black</a>
          </p>
          <p>Other Colors</p>
          <p>
            <a
              href="#"
              class="btn small red"
            >red</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small orange"
            >orange</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small yellow"
            >yellow</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small green"
            >green</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small blue"
            >blue</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small disabled"
            >disabled</a>
          </p>
        </div>
        <div class="col-1-5">
          <p class="space" />
          <p>
            <a
              href="#"
              class="btn small round gray-light"
            >round gray-light</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small round"
            >round</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small round gray-dark"
            >round gray-dark</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small round black"
            >round black</a>
          </p>
          <p class="space" />
          <p>
            <a
              href="#"
              class="btn small round red"
            >round red</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small round orange"
            >round orange</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small round yellow"
            >round yellow</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small round green"
            >round green</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small round blue"
            >round blue</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small round disabled"
            >round disabled</a>
          </p>
        </div>
        <div class="col-1-5">
          <p class="space" />
          <p>
            <a
              href="#"
              class="btn small no-outline gray-light"
            >no-outline gray-light</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small no-outline"
            >no-outline</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small no-outline gray-dark"
            >no-outline gray-dark</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small no-outline black"
            >no-outline black</a>
          </p>
          <p class="space" />
          <p>
            <a
              href="#"
              class="btn small no-outline red"
            >no-outline red</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small no-outline orange"
            >no-outline orange</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small no-outline yellow"
            >no-outline yellow</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small no-outline green"
            >no-outline green</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small no-outline blue"
            >no-outline blue</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small no-outline disabled"
            >no-outline disabled</a>
          </p>
        </div>
        <div class="col-1-5">
          <p class="space" />
          <p>
            <a
              href="#"
              class="btn small solid gray-light"
            >solid gray-light</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid"
            >solid</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid gray-dark"
            >solid gray-dark</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid black"
            >solid black</a>
          </p>
          <p class="space" />
          <p>
            <a
              href="#"
              class="btn small solid red"
            >solid red</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid orange"
            >solid orange</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid yellow"
            >solid yellow</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid green"
            >solid green</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid blue"
            >solid blue</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid disabled"
            >solid disabled</a>
          </p>
        </div>
        <div class="col-1-5">
          <p class="space" />
          <p>
            <a
              href="#"
              class="btn small solid round gray-light"
            >solid round gray-light</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid round"
            >solid round</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid round gray-dark"
            >solid round gray-dark</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid round black"
            >solid round black</a>
          </p>
          <p class="space" />
          <p>
            <a
              href="#"
              class="btn small solid round red"
            >solid round red</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid round orange"
            >solid round orange</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid round yellow"
            >solid round yellow</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid round green"
            >solid round green</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid round blue"
            >solid round blue</a>
          </p>
          <p>
            <a
              href="#"
              class="btn small solid round disabled"
            >solid round disabled</a>
          </p>
        </div>
        <div class="clear" />
      </div>
    </div>

    <div class="row">
      <div class="section page-components-forms">
        <hr>
        <h1>Forms</h1>
        <div class="full-width-forms">
          <div class="col-1-3">
            <label>
              <a
                class="btn"
                href="#"
              >Anchor</a>
            </label>
          </div>
          <div class="col-1-3">
            <label>
              <button class="btn">Button Tag</button>
            </label>
          </div>
          <div class="col-1-3">
            <label>
              <input
                class="btn"
                type="submit"
                value="Submit Tag"
              >
            </label>
          </div>
          <div class="clear" />
          <div class="col-1-4">
            <label>
              <input
                placeholder="email"
                type="email"
              >
            </label>
          </div>
          <div class="col-1-4">
            <label>
              <input
                placeholder="date/time"
                type="datetime"
              >
            </label>
          </div>
          <div class="col-1-4">
            <label>
              <input
                placeholder="number"
                type="number"
              >
            </label>
          </div>
          <div class="col-1-4">
            <label>
              <input
                placeholder="password"
                type="password"
              >
            </label>
          </div>
          <div class="clear" />
          <div class="col-1-4">
            <label>
              <input
                name="name"
                placeholder="text"
              >
            </label>
          </div>
          <div class="col-1-4">
            <label>
              <input
                placeholder="search"
                type="search"
              >
            </label>
          </div>
          <div class="col-1-4">
            <label>
              <input
                placeholder="1-808-000-0000"
                type="tel"
              >
            </label>
          </div>
          <div class="col-1-4">
            <label>
              <select name="name">
                <option value="select option one">select option</option>
                <option value="select option two">select option</option>
                <option value="select option three">select option</option>
                <option value="select option four">select option</option>
              </select>
            </label>
          </div>
          <div class="clear" />
          <div class="col-1-4">
            <label>
              <select>
                <optgroup label="group 1">
                  <option>select option</option>
                  <option>select option</option>
                  <option>select option</option>
                </optgroup>
              </select>
            </label>
          </div>
          <div class="col-1-4">
            <label>
              <input
                name="name"
                placeholder="url"
                type="url"
              >
            </label>
          </div>
          <div class="col-1-4">
            <label>
              <input type="file">
            </label>
          </div>
          <div class="col-1-4">
            <label>
              <input
                name="name"
                type="range"
              >
            </label>
          </div>
          <div class="clear" />
          <div class="col-1-5">
            <label>
              <input
                name="name"
                placeholder="12-31-1999"
                type="date"
              >
            </label>
          </div>
          <div class="col-1-5">
            <label>
              <input
                name="name"
                placeholder="local date/time"
                type="datetime-local"
              >
            </label>
          </div>
          <div class="col-1-5">
            <label>
              <input
                name="name"
                placeholder="time"
                type="time"
              >
            </label>
          </div>
          <div class="col-1-5">
            <label>
              <input
                name="name"
                placeholder="week"
                type="week"
              >
            </label>
          </div>
          <div class="col-1-5">
            <label>
              <input
                name="name"
                placeholder="month"
                type="month"
              >
            </label>
          </div>
          <div class="clear" />
          <div class="col-1-2">
            <label>
              <textarea
                name="name"
                placeholder="textarea"
                rows="4"
              />
            </label>
          </div>
          <div class="col-1-2 space" />
          <div class="clear" />
        </div>

        <h2>Radios</h2>
        <ul>
          <li>
            <label>
              <input
                name="name"
                type="radio"
                checked="true"
              >
              <span> Radio</span>
            </label>
          </li>
          <li>
            <label>
              <input
                name="name"
                type="radio"
              >
              <span> Radio</span>
            </label>
          </li>
          <li>
            <label class="gray-light">
              <input
                name="name"
                type="radio"
                disabled="true"
              >
              <span> Radio (disabled)</span>
            </label>
          </li>
        </ul>

        <h2>Checkbox</h2>
        <ul>
          <li>
            <label>
              <input
                name="name"
                type="checkbox"
                checked="true"
              >
              <span> Checkbox</span>
            </label>
          </li>
          <li>
            <label>
              <input
                name="name"
                type="checkbox"
              >
              <span> Checkbox</span>
            </label>
          </li>
          <li>
            <label class="gray-light">
              <input
                name="name"
                type="checkbox"
                disabled="true"
              >
              <span> Checkbox (disabled)</span>
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="section">
        <hr>
        <h1>Icons</h1>
        <p class="page-components-icon">
          <i class="icon-arrow-down" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-left" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-left-outline" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-right" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-right-outline" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-stem-down" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-stem-down-circle" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-stem-download" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-stem-left" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-stem-left-circle" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-stem-right" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-stem-right-circle" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-stem-up" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-stem-up-circle" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-up" />
        </p>
        <p class="page-components-icon">
          <i class="icon-arrow-updown" />
        </p>
        <p class="page-components-icon">
          <i class="icon-check" />
        </p>
        <p class="page-components-icon">
          <i class="icon-check-alt" />
        </p>
        <p class="page-components-icon">
          <i class="icon-close" />
        </p>
        <p class="page-components-icon">
          <i class="icon-close-empty" />
        </p>
        <p class="page-components-icon">
          <i class="icon-close-outline" />
        </p>
        <p class="page-components-icon">
          <i class="icon-logo" />
        </p>
        <p class="page-components-icon">
          <i class="icon-menu" />
        </p>
        <p class="page-components-icon">
          <i class="icon-share" />
        </p>
        <p class="page-components-icon">
          <i class="icon-share-email" />
        </p>
        <p class="page-components-icon">
          <i class="icon-share-facebook" />
        </p>
        <p class="page-components-icon">
          <i class="icon-share-google" />
        </p>
        <p class="page-components-icon">
          <i class="icon-share-linkedin" />
        </p>
        <p class="page-components-icon">
          <i class="icon-share-pinterest" />
        </p>
        <p class="page-components-icon">
          <i class="icon-share-reddit" />
        </p>
        <p class="page-components-icon">
          <i class="icon-share-twitter" />
        </p>
        <p class="page-components-icon">
          <i class="icon-share-whatsapp" />
        </p>
        <p class="page-components-icon">
          <i class="icon-social-facebook" />
        </p>
        <p class="page-components-icon">
          <i class="icon-social-google" />
        </p>
        <p class="page-components-icon">
          <i class="icon-social-linkedin" />
        </p>
        <p class="page-components-icon">
          <i class="icon-social-twitter" />
        </p>
        <p class="page-components-icon">
          <i class="icon-vital" />
        </p>
        <p class="page-components-icon">
          <i class="icon-x" />
        </p>
        <p class="page-components-icon">
          <i class="icon-x-alt" />
        </p>
        <div class="clear" />
      </div>
    </div>
  </div>
</template>
