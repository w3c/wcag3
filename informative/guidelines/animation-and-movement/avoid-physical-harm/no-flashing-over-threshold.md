## Intent

Some people with seizure disorders can have a seizure triggered by flashing visual content. Most people are unaware that they have this disorder until it strikes. In 1997, a cartoon on television in Japan sent over 700 children to the hospital, including about 500 who had seizures. Warnings do not work well because they are often missed, especially by children who may in fact not be able to read them.

The objective of this requirement is to ensure that content avoids the types of flash that are most likely to cause seizures when viewed even for a second or two.

## Methods
* Consider if :term[flashing] is :term[essential] and, if it is not, refrain from including it.
* Ensure that (an accessibility supported) user-setting to avoid animation and flashing is respected.
* Ensure that any flashing is below [X] size in the users’ view.

## Tests

<b>Procedure</b>

For each instance of flashing:
1. Check if the flashing is :term[essential].
2. Check that the flashing is below the thresholds defined by the :term[general flash and red flash thresholds].

<b>Expected results</b>
* #1 or #2 is true.
