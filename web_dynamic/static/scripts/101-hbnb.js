<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css"
        href="{{ url_for('static', filename='styles/4-common.css') + '?' + cache_id }}">
    <link rel="stylesheet" type="text/css"
        href="{{ url_for('static', filename='styles/3-header.css') + '?' + cache_id }}">
    <link rel="stylesheet" type="text/css"
        href="{{ url_for('static', filename='styles/3-footer.css') + '?' + cache_id }}">
    <link rel="stylesheet" type="text/css"
        href="{{ url_for('static', filename='styles/6-filters.css') + '?' + cache_id }}s">
    <link rel="stylesheet" type="text/css"
        href="{{ url_for('static', filename='styles/8-places.css') + '?' + cache_id }}">
    <link rel="icon" href="{{ url_for('static', filename='images/icon.png') + '?' + cache_id }}" />
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="{{ url_for('static', filename='scripts/101-hbnb.js') + '?' + cache_id }}"></script>
    <title>HBnB</title>
</head>

<body>
    <header>
        <div class="logo"></div>
        <div id="api-status"></div>
    </header>
    <div class="container">
        <section class="filters">
            <div class="locations">
                <h3>States</h3>
                <h4>&nbsp;</h4>
                <div class="popover">
                    <ul>
                        {% for state in states %}
                        <li>
                            <input data-id="{{ state.id }}" data-name="{{ state.name }}" type="checkbox">
                            <h2>{{ state[0].name }}:</h2>
                            <ul>
                                {% for city in state[1] %}
                                <li>
                                    <input data-id="{{ city.id }}" data-name="{{ city.name }}" type="checkbox">
                                    {{ city.name }}
                                </li>
                                {% endfor %}
                            </ul>
                        </li>
                        {% endfor %}
                    </ul>
                </div>
            </div>
            <div class="amenities">
                <h3>Amenities</h3>
                <h4>&nbsp;</h4>
                <div class="popover">
                    <ul>
                        {% for amenity in amenities %}
                        <li>
                            <input data-id="{{ amenity.id }}" data-name="{{ amenity.name }}" type="checkbox">
                            {{ amenity.name }}
                        </li>
                        {% endfor %}
                    </ul>
                </div>
            </div>
            <button type="button">Search</button>
        </section>
        <div class="placesh1">
            <h1>Places</h1>
        </div>
        <section class="places">
        </section>
    </div>
    <footer>
        <p>Holberton School</p>
    </footer>
</body>

</html>
