using Assets.Scripts;
using UnityEngine;
using UnityEngine.SceneManagement;
using System.Runtime.InteropServices;

public class StartController : MonoBehaviour
{
    public GameObject mNextButton;

    [DllImport("__Internal")]
    private static extern void PingForParams();

    // Start is called before the first frame update
    void Start()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
        PingForParams();
        mNextButton.SetActive(false);
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

    public void ReceiveParams(string paramsJson)
    {
        mNextButton.SetActive(true);
        Debug.Log(paramsJson);

        GameData.planeParams = PlaneParams.CreateFromJSON(paramsJson);
        Debug.Log("mass: " + GameData.planeParams.mass);
        Debug.Log("drag: " + GameData.planeParams.drag);
        Debug.Log("force: " + GameData.planeParams.force);
        Debug.Log("angle: " + GameData.planeParams.angle);
    }
}
