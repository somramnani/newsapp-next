import BuildManifestPlugin from 'next/dist/build/webpack/plugins/build-manifest-plugin';
import styles from '../styles/Layout.module.css'

const Layout  = () => { 
  return (
    <div className = {style.container}>
      <main className={styles.main}></main>
    

    </div>
  )
}

export default Layout;