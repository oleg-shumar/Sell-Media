!function(e){function t(l){if(i[l])return i[l].exports;var a=i[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,l){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=21)}({21:function(e,t,i){i(22),i(23),i(24),e.exports=i(25)},22:function(e,t,i){"use strict";var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};jQuery(document).ready(function(e){function t(t){if(void 0===t)return!1;var t=t.split(","),i={action:"check_attachment_is_audio_video",attachment_id:t[0]};e.post(ajaxurl,i,function(t){"true"==t&&e("#sell-media-embed-link-field").show()})}function i(){var i=[];e(".sell-media-upload-list li").each(function(){i.push(e(this).data("post_id"))});var l=i.join(",");e("#sell-media-attachment-id").val(l),t(l)}function a(t){e.post(ajaxurl,{action:"sell_media_load_pricelists",parent_id:t},function(i){if(e("#sell-media-display-pricelists").remove(),"0"!=i){var l=e("#sell-media-edit-pricelist-link-wrap a").data("href");e("#sell-media-edit-pricelist-link-wrap a").attr("href",l+t).show(),e("#sell-media-edit-pricelist-link-wrap").show(),e("#sell-media-price-group-field").append(i)}else e("#sell-media-edit-pricelist-link-wrap").hide()})}var o;e(document).on("click",".sell-media-upload-button",function(t){t.preventDefault();var l=e(this).data("id");if(o)return void o.open();o=wp.media.frames.file_frame=wp.media({title:"Select Files To Sell",description:"This is the description",button:{text:"Sell All Selected Files"},multiple:"add"}),o.on("select",function(){var t=o.state().get("selection").toJSON(),a=[];e.each(t,function(e,t){a.push({id:t.id,title:t.title,description:t.description,url:t.url})});var n={action:"sell_media_upload_callback",attachments:a,id:l,security:e("#sell_media_meta_box_nonce").val()};e(".sell-media-ajax-loader").show(),e.ajax({type:"POST",url:ajaxurl,data:n,success:function(t){e(".sell-media-ajax-loader").hide(),e(".sell-media-upload-list").append(t),i()}})}),o.open()}),e(document).on("click",".sell-media-delete",function(t){var l=e(this).data("id");return e('.sell-media-attachment[data-post_id="'+l+'"]').remove(),i(),!1}),t(e("input#sell-media-attachment-id").val()),e(".sell-media-upload-options").on("click",function(t){t.preventDefault(),e(this).find("span").toggleClass("dashicons-arrow-up dashicons-arrow-down"),e("#sell-media-upload-show-options").toggle()}),e(".sell-media-toggler").on("click",function(){e(this).toggleClass("active"),e(this).find("span").toggleClass("dashicons-arrow-up dashicons-arrow-down"),e(this).next(".toggle").toggle()}),e("#sell-media-upload-bulk-selector").change(function(){var t=e("#sell-media-upload-bulk-processor");e(this).val()?e(t).prop("disabled",!1):e(t).prop("disabled",!0)}),e("#sell-media-upload-bulk-processor").on("click",function(t){t.preventDefault();var l=e(this);e(l).text(e(l).data("uploading-text"));var a=e("#sell-media-upload-bulk-selector").val(),o=e(".sell-media-upload-button").data("id"),n={action:"sell_media_upload_bulk_callback",dir:a,id:o,security:e("#sell_media_meta_box_nonce").val()};e.ajax({type:"POST",url:ajaxurl,data:n,success:function(t){e(".sell-media-upload-list").append(t),i(),e(l).text(e(l).data("default-text"))}})}),e(document).on("click",".sell-media-upload-trigger-collection-icon",function(t){if(t.preventDefault(),o)return void o.open();o=wp.media.frames.file_frame=wp.media({title:"Select Images To Sell",description:"This is the description",button:{text:"Use selected image as icon"},multiple:!1}),o.on("select",function(){var t=o.state().get("selection").first().toJSON();e("#collection_icon_input_field").val(t.id),e("#collection_icon_url").val(t.url),e("#collection_icon_target").html('<img src="'+t.sizes.thumbnail.url+'" /><br><a href="javascript:void(0);" class="upload_image_remove">Remove</a>')}),o.open()}),e(document).on("click",".upload_image_remove",function(){e("#collection_icon_input_field").val(""),e("#collection_icon_url").val(""),e("#collection_icon_target img").remove()}),e(document).ajaxComplete(function(t,i,l){e("#collection_icon_target img").remove()});var n=inlineEditPost.edit;inlineEditPost.edit=function(t){n.apply(this,arguments);var i=0;if("object"==(void 0===t?"undefined":l(t))&&(i=parseInt(this.getId(t))),i>0){var a=e("#edit-"+i),o=e("#post-"+i),d=o.find("td.column-sell_media_price").html(),r=o.find("td.column-taxonomy-price-group a").text();e(':input[name="sell_media_price"]',a).val(d.replace(/^\D+/g,"")),e('select[name="sell_media_price_group"] option',a).filter(function(){return e(this).text()==r}).attr("selected",!0)}},e(document).on("click","#bulk_edit",function(){var t=e("#bulk-edit"),i=new Array;t.find("#bulk-titles").children().each(function(){i.push(e(this).attr("id").replace(/^(ttle)/i,""))});var l=t.find('select[name="sell_media_price_group"]').val(),a=t.find('input[name="sell_media_price"]').val(),o=t.find('input[name="sell_media_quick_edit_nonce"]').val();e.ajax({url:ajaxurl,type:"POST",async:!1,cache:!1,data:{action:"sell_media_save_bulk_edit",post_ids:i,sell_media_price_group:l,sell_media_price:a,sell_media_quick_edit_nonce:o}})}),e.fn.tabs&&e(".sell-media-add-item-main-container-wrap").tabs({activate:function(t,i){e(i.newPanel).css({display:"table"})},create:function(t,i){e(i.panel).css({display:"table"})}}),a(e("select#sell-media-price-group").val()),e("select#sell-media-price-group").on("change",function(){a(e(this).val())})})},23:function(e,t,i){"use strict";!function(e){e(function(){function t(){var t=[];e(".sell-media-upload-list li").each(function(){t.push(e(this).data("post_id"))});var i=t.join(",");e("#sell-media-attachment-id").val(i),sell_media_is_attachment_audio_video(i)}if(e.isFunction(e.fn.sortable)&&e(".sell-media-upload-list").sortable({update:function(){t()}}),"undefined"!=typeof uploader){var i=e(".sell-media-upload-progress-bar"),l=e(".sell-media-upload-progress-bar div.sell-media-upload-progress-bar-inner"),a=e(".sell-media-upload-progress-bar div.sell-media-upload-progress-bar-status"),o=e("#sell-media-upload-error"),n=0;uploader.bind("FilesAdded",function(t,l){e(o).html(""),n=l.length,e(".uploading .current",e(a)).text("1"),e(".uploading .total",e(a)).text(n),e(".uploading",e(a)).show(),e(".done",e(a)).hide(),e(i).fadeIn()}),uploader.bind("UploadProgress",function(t,i){e(".uploading .current",e(a)).text(n-t.total.queued+1),e(".uploading .total").text(n),e(l).css({width:t.total.percent+"%"})}),uploader.bind("FileUploaded",function(i,l,a){a.response.replace(/^<pre>(\d+)<\/pre>$/,"$1").match(/media-upload-error|error-div/)?e(o).html(a.response):e.post(sell_media_drag_drop_uploader.ajax,{action:"sell_media_upload_gallery_load_image",nonce:sell_media_drag_drop_uploader.drag_drop_nonce,id:a.response},function(i){e(".sell-media-ajax-loader").hide(),e(".sell-media-upload-list").append(i),t()})}),uploader.bind("UploadComplete",function(){e(".uploading",e(a)).hide(),e(".done",e(a)).show(),setTimeout(function(){e(i).fadeOut()},1e3)}),uploader.bind("Error",function(t,i){e(o).html('<div class="error fade"><p>'+i.file.name+": "+i.message+"</p></div>"),t.refresh()})}})}(jQuery)},24:function(e,t){},25:function(e,t){}});
//# sourceMappingURL=sell_media_admin.js.map