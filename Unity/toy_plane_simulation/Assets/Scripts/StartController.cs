using Assets.Scripts;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using System.Runtime.InteropServices;

public class StartController : MonoBehaviour
{
    //[DllImport("__Internal")]
    //private static extern void PingForParams();

    // Start is called before the first frame update
    void Start()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
        //PingForParams();
#endif
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void MoveToSimScene()
    {
        SceneManager.LoadScene((int)Constants.SceneIndex.SIMULATION);
    }
}
