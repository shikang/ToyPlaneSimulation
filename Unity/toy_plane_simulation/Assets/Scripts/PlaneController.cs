using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlaneController : MonoBehaviour
{
    public float mForce;
    public float mAngle;

    private bool mFirst;
    private Rigidbody mRigidbody;
    private Vector3 mPrevious;

    // Start is called before the first frame update
    void Start()
    {
        mRigidbody = GetComponent<Rigidbody>();
        mFirst = true;
    }

    // Fixed Update is for physics update
    void FixedUpdate()
    {
        if (mFirst)
        {
            float rad = mAngle * Mathf.Deg2Rad;
            Vector3 forceVec = Vector3.zero;
            forceVec.z = Mathf.Cos(rad);
            forceVec.y = Mathf.Sin(rad);

            mRigidbody.AddForce(forceVec * mForce);
            //mRigidbody.angularVelocity = Vector3.right * forceVec.x;

            //transform.rotation.SetAxisAngle(Vector3.right, -mAngle);
            transform.Rotate(Vector3.right, -mAngle);
            mPrevious = forceVec;

            mFirst = false;
        }
        else
        {
            if (transform.position.y > 10.0f)
            {
                Vector3 current = mRigidbody.velocity.normalized;
                float angle = Vector3.Angle(mPrevious, mRigidbody.velocity.normalized);
                mPrevious = current;

                float finalAngle = Mathf.Min(angle * 0.9f, 0.2f + Random.Range(0.01f, 0.02f));
                Debug.Log(finalAngle);
                transform.Rotate(Vector3.right, finalAngle);
            }
        }

        //Vector3 v = mRigidbody.velocity.normalized;
        //transform.Rotate(v);
    }
}
