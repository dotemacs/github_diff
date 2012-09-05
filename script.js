function ignoreWhitespace()
{
    if (!window.location.href.match(/\?w=1$/)) {
        window.location.href += ('?w=1');
    }
}

ignoreWhitespace();
