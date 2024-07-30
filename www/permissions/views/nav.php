
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
                <?php _menu_icon("top", "permissions"); ?>
                <?php _t("Permissions"); ?>
            </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">



            </ul>


            <form action="index.php" method="get" class="navbar-form navbar-left">
                <input type="hidden" name="c" value="permissions">
                <input type="hidden" name="a" value="search">
                <input type="hidden" name="w" value="all">
                <div class="form-group">
                    <input type="text" name="txt" class="form-control" placeholder="" required="">
                </div>
                <button type="submit" class="btn btn-default"><?php _t("Search"); ?></button>
            </form>




            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                <?php if (permissions_has_permission($u_rol, $c, "create")) { ?>     
                    <a 
                        type="button" 
                        class="btn btn-primary navbar-btn navbar-right" 
                        href="index.php?c=permissions&a=add"
                        >
                        <span class="glyphicon glyphicon-plus-sign"></span>
                        <?php _t("New"); ?>
                    </a>
                <?php } ?>    


            </div><!-- /.navbar-collapse -->


        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>