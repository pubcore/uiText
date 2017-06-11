# Map keys to text with replacement-tag support
To support multilingual user interfaces one option is to use key-value lists
of texts. Instead of writing the text directly into a document, a text-key is
used to look up the text to show.

An other benefit is to decouple developer work from content management work,
if texts are not known at time of development.

## Configuration
    import {initLogMissingTextkey} from 'pubcore-ui-text'

    //enable post log-infos, if there are missing text-keys
    initLogMissingTextkey({postUri:'https://xyz.com/'})

## Examples

    import uiText from 'pubcore-ui-text'

    //some example data with a text-key "content" and it's text string having
    //one replacement-tag "count":
    var T = {
        content: '{count} item(s)'
    }

    console.log( uiText(T, 'content', {count:5}) )
    //output: '5 item(s)'

    //we can add some inline default text:
    console.log( uiText(T, 'word_count', 'Found {count} words', {count:2}) )
    //output: "Found 2 words"
