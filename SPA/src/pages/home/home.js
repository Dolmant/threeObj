// @flow
import React from "react"
import {observer, inject} from "mobx-react"
import type {StoreType} from "types"
import {InjectedComponent} from "store"
import Grid from "@material-ui/core/Grid"
import "./home.less"
import classNames from "util/classNames"
import * as THREE from "three"
import OBJLoader from "three-obj-loader"
OBJLoader(THREE);

type Props = {
};

type InjectedProps = {
    store: StoreType,
};

type State = {
};

@inject("store")
@observer
export default class Home extends InjectedComponent<Props, InjectedProps, State> {
    state = {
    }

    componentWillMount() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        document.body.appendChild( renderer.domElement );
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        scene.add( light );
        camera.position.z = 5;
        scene.add( cube );
        const loader = new THREE.OBJLoader();
        loader.load(
            // resource URL
            '/assets/Low-Poly_Models.obj',
            // called when resource is loaded
            function ( OBJFile ) {
        
                scene.add( OBJFile );
                function animate() {
                    requestAnimationFrame( animate );
                    cube.rotation.x += 0.01;
                    cube.rotation.y += 0.01;
                    renderer.render( scene, camera );
                }
                animate();
            },
            // called when loading is in progresses
            function ( xhr ) {
        
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        
            },
            // called when loading has errors
            function ( error ) {
        
                console.log( 'An error happened' );
        
            }
        );


    }

    render() {

        return (
            <div className="homeNew">

            </div>
        )
    }
}
