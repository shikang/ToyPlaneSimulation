using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

public class Build : Editor
{
    [MenuItem("Tools/Set WebGL Args")]
    static void SetWebGLArgs()
    {
        PlayerSettings.WebGL.emscriptenArgs = "-s ERROR_ON_UNDEFINED_SYMBOLS=0";
    }

    [MenuItem("Tools/Remove WebGL Args")]
    static void RemoveWebGLArgs()
    {
        PlayerSettings.WebGL.emscriptenArgs = "";
    }
}
