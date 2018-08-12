<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Storade</router-link>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="">End day</a></li>
                    <li class="dropdown">
                        <a href=""
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false">Save &amp; Load <span class="caret"></span></a>

                            <ul class="dropdown-menu">
                                <li><a href="">Save Data</a></li>
                                <li><a href="">Load Data</a></li>
                            </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    .navbar {
        border: none;
        border-radius: 0;
        background: #dce1e6;

        .navbar-brand {
            background: #998dff;
            color: #fbfaff;
        }
        .navbar-nav {
            a {
                font-weight: bold;
                color: #9599a9;

                &:hover {
                    color: #72778d;
                }
            }
            .active a {
                color: #454a5d;
                background: transparent;
            }
            
        }
    }
</style>

