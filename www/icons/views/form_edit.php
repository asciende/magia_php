<form class="form-horizontal" action="index.php" method="post" >
    <input type="hidden" name="c" value="icons">
    <input type="hidden" name="a" value="ok_edit">
    <input type="hidden" name="id" value="<?php echo $icons->getId(); ?>">
    <input type="hidden" name="redi[redi]" value="<?php echo $arg["redi"]; ?>">

    <?php # provider ?>
    <div class="form-group">
        <label class="control-label col-sm-3" for="provider"><?php _t("Provider"); ?></label>
        <div class="col-sm-8">
            <input type="text" name="provider" class="form-control" id="provider" placeholder="provider" value="<?php echo $icons->getProvider(); ?>" >
        </div>	
    </div>
    <?php # /provider ?>

    <?php # icon ?>
    <div class="form-group">
        <label class="control-label col-sm-3" for="icon"><?php _t("Icon"); ?></label>
        <div class="col-sm-8">
            <input type="text" name="icon" class="form-control" id="icon" placeholder="icon" value="<?php echo $icons->getIcon(); ?>" >
        </div>	
    </div>
    <?php # /icon ?>

    <?php # order_by ?>
    <div class="form-group">
        <label class="control-label col-sm-3" for="order_by"><?php _t("Order_by"); ?></label>
        <div class="col-sm-8">
            <input type="number" name="order_by" class="form-control" id="order_by" placeholder="order_by" value="<?php echo $icons->getOrder_by(); ?>" >
        </div>	
    </div>
    <?php # /order_by ?>

    <?php # status ?>
    <div class="form-group">
        <label class="control-label col-sm-3" for="status"><?php _t("Status"); ?></label>
        <div class="col-sm-8">
            <select name="status" class="form-control" id="status" >                
                <option value="1" <?php echo ($icons->getStatus() == 1 ) ? " selected " : ""; ?> ><?php echo _t("Actived"); ?></option>
                <option value="0" <?php echo ($icons->getStatus() == 0 ) ? " selected " : ""; ?> ><?php echo _t("Blocked"); ?></option>
            </select>
        </div>	
    </div>
    <?php # /status ?>


    <div class="form-group">
        <label class="control-label col-sm-3" for=""></label>
        <div class="col-sm-8">    
            <button type="submit" class="btn btn-default"><?php echo icon("pencil"); ?> <?php _t("Edit"); ?></button>
        </div>      							
    </div>      							

</form>
