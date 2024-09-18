  <footer class="site-footer">
    <div class="container">
        <div class="copyright"><?php echo esc_html(get_theme_mod('set_copyright', __('Copyright @ 2024 All rights reserved', 'wp-devs'))); ?></div>
        <nav class="footer-menu">
            <?php wp_nav_menu(array('theme_location' => 'wp_devs_footer_menu', 'depth' => 1)); ?>
        </nav>
    </div>
  </footer>
    </div>
  <?php wp_footer(); ?>
</body>
</html>