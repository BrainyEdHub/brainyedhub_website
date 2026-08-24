All seven mock test PDFs are in place and live:

  gcse-foundation-maths-mock-test.pdf   (Mathematics)
  gcse-statistics-mock-test.pdf         (Statistics)
  gcse-english-mock-test.pdf            (English)
  gcse-biology-mock-test.pdf            (Biology)
  gcse-chemistry-mock-test.pdf          (Chemistry)
  gcse-physics-mock-test.pdf            (Physics)
  gcse-computer-science-mock-test.pdf   (Computer Science)

How it works: on the Resources page, a parent picks a subject from the
dropdown. That choice is passed along in the redirect URL, and
resources-thanks.html (via assets/script.js) shows the matching download
button automatically.

To add an 8th subject later: add an <option> in the form in resources.html,
add one line to the MOCK_TEST_SUBJECTS list at the top of assets/script.js,
and drop the matching PDF here. That's the only place the subject list lives.

To replace any of the seven above with a newer version, just overwrite the
file with the same name — nothing else needs to change.

Before going live, also update the placeholder domain
(https://www.brainyedhub.com) in the form's _next and _autoresponse fields
in resources.html to match your real domain.

Also included:
  brainyedhub-revision-timetable.pdf — free printable weekly revision
  planner, linked from the Resources page. Self-contained, no subject
  selection needed, so no extra wiring required if you replace it later.

Also included:
  brainyedhub-multiplication-charts.pdf — free printable times tables
  (1-12) plus a blank practice grid, linked from the Resources page.
  Self-contained, no wiring needed if you replace it later.
